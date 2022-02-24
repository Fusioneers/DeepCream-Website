<script context="module" lang="ts">
    import type {Load} from '@sveltejs/kit';
    import {store} from './store';
    import type {Page} from "../../lib/types";

    export const load: Load = async ({fetch}) => {
        const res = await fetch('/site');
        const content = await res.json();
        const pages = content.site.data.attributes.pages.data

        store.update(() => pages);

        return {props: {pages: pages}};
    };
</script>

<script lang="ts">
    import type {Page} from '../../lib/types';

    export let pages: Page[] = [];

    function redirect() {
        window.open('https://github.com/Fusioneers/DeepCream', '_blank');
    }
</script>

<div class="site">
    <div class="toolbar">
        <div class="title-bar">
            <h1 class="page-title">DeepCream</h1>
            <div class="github" on:click={redirect}>
                <img alt="GitHub"
                     src="/assets/GitHub-Mark/PNG/GitHub-Mark-Light-64px.png">
            </div>
        </div>
        <nav class="navigation">
            {#each pages as page}
                <a href={"../" + page.attributes.title.toLowerCase()}>{page.attributes.title}</a>
            {/each}
        </nav>
    </div>
    <slot></slot>
</div>

<style lang="scss">
  @import "src/global";
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@300;400;500;600&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
</style>