<script context="module" lang="ts">
    import {store} from './store';
    import type {Page} from "../../lib/types";

    export async function load({params}) {
        let title = params.title;
        let pages: Page[] = [];

        store.subscribe(data => {
            pages = data
        })

        return {props: {title: title, pages: pages}};
    }
</script>

<script lang="ts">
    import type {Page} from '../../lib/types';

    let now = new Date(), month, day, year;
    export let cp_year = now.getFullYear();

    export let title = '';
    export let pages: Page[] = [];

    function redirect(url) {
        if (url) {
            window.open(url, '_blank');
        }
    }
</script>

<div class="site">
  {#each pages as page}
    {#if page.attributes.title.toLowerCase() === title}
      <div class="page">
        {#each page.attributes.content as component}
          {#if component.__typename === "ComponentPageLanding"}
            <div class="landing">
              <!--{#if ['video/webm', 'video/mp4'].includes(component.media.data.attributes.mime)}
                  <video autoplay muted width="100%" height="100%">
                      <source src={'/assets' + component.media.data.attributes.url}
                              type={component.media.data.attributes.mime}>
                      Your browser does not support the video tag.
                  </video>
              {:else}
                  <img src={'/assets' + component.media.data.attributes.url}
                       alt={component.media.data.attributes.alternativeText}>
              {/if}
              {#if component.header}
                  <h1 class="header">{component.header}</h1>
              {/if}-->
              <iframe scrolling="no" seamless="seamless" src="/assets/landing/landing.html"></iframe>
              <style>
                  iframe {
                      height: 92vh;
                      width: 100%;
                      border: none;
                  }
              </style>
            </div>
          {/if}

          <div class="content">
            {#if component.__typename === "ComponentPageParagraph"}
              <div class="paragraph">
                {#if component.title}
                  <h1
                          class={component.important ? "title important" : "title"}>{component.title}</h1>
                {/if}

                <p>{@html component.body.toString().replace(/\*\*/g, '<div style="color: #FF79C6; display: inline">').replace(/\/\*/g, '</div>')}</p>
              </div>
            {/if}

            {#if component.__typename === "ComponentPageCode"}
              <div class="code">
                {#if component.title}
                  <h1 class="title">{component.title}</h1>
                {/if}

                <div class="code-box">
                  <code>{component.code}</code>
                </div>
              </div>
            {/if}

            {#if component.__typename === "ComponentPageBlog"}
              <div class="blog">
                {#if component.title}
                  <h1 class="title">{component.title}</h1>
                {/if}


                {#each component.blog_entries.data as blog_entry}
                  <div class="blog_entry">
                    <h1 class="title">{blog_entry.attributes.title}</h1>
                    <p class="published_at">
                      Published on {(new Date(blog_entry.attributes.publishedAt)).toUTCString()}
                    </p>
                    <p>{@html blog_entry.attributes.body.toString().replace(/\*\*/g, '<div style="color: #FF79C6; display: inline">').replace(/\/\*/g, '</div>')}</p>
                    {#each blog_entry.attributes.media.data as media}
                      {#if ['video/webm', 'video/mp4'].includes(media.attributes.mime)}
                          <video autoplay muted width="100%" height="100%">
                              <source src={'/assets' + media.attributes.url}
                                      type={media.attributes.mime}>
                              Your browser does not support the video tag.
                          </video>
                      {:else}
                          <img src={'/assets' + media.attributes.url}
                               alt={media.attributes.alternativeText}>
                      {/if}
                    {/each}
                  </div>
                {/each}
              </div>
            {/if}

            {#if component.__typename === "ComponentPageTeam"}
              <div class="team">
                {#if component.title}
                  <h1 class="title">{component.title}</h1>
                {/if}

                <div class="team_members">
                  {#each component.team_members.data as team_member}
                    <div class="team_member" on:click={() => redirect(team_member.attributes.link)}>
                      <img src={'/assets' + team_member.attributes.profile.data.attributes.url}
                           alt={team_member.attributes.profile.data.attributes.alternativeText}>
                      <div class="text">
                        <h1 class="title">{team_member.attributes.name}</h1>
                        <h2 class="email">{team_member.attributes.email}</h2>
                        <p>{team_member.attributes.characterization}</p>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}

            {#if component.__typename === "ComponentPageCustom"}
              <div class="custom">
                {@html component.html}
              </div>
            {/if}
          </div>
        {/each}
        <div class="footer">
          <p>
            Copyright {cp_year} <a href="https://www.fusioneers.space/home/" style="color: #FF79C6;">Fusioneers</a>
          </p>
        </div>
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  @import "src/global";
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+1+Code:wght@300;400;500;600&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
</style>