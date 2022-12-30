<script setup lang="ts">
import TheHeroBanner from './common/TheHeroBanner.vue';
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
import EcosystemIcon from './icons/IconEcosystem.vue';
import CommunityIcon from './icons/IconCommunity.vue';
import SupportIcon from './icons/IconSupport.vue';
import LogoIcon from './icons/IconLogo.vue';
</script>

<template>

  <TheHeroBanner></TheHeroBanner>
  <div class="padded-container">
    <WelcomeItem>
      <template #icon>
        <ToolingIcon />
      </template>
      <template #heading>Tooling</template>

      This project is served and bundled with
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>. The recommended IDE
      setup is <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>. If you need to test
      your components and web pages, check out
      <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
      <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

      <br />

      More instructions are available in <code>README.md</code>.
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>,
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a>,
      <a target="_blank" href="https://test-utils.vuejs.org/">Vue Test Utils</a>, and
      <a target="_blank" href="https://github.com/vuejs/devtools">Vue Dev Tools</a>. If you need more
      resources, we suggest paying
      <a target="_blank" href="https://github.com/vuejs/awesome-vue">Awesome Vue</a>
      a visit.
    </WelcomeItem>

    <WelcomeItem class="my-10">
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a target="_blank" href="https://chat.vuejs.org">Vue Land</a>, our official Discord server, or
      <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
      You should also subscribe to
      <a target="_blank" href="https://news.vuejs.org">our mailing list</a> and follow the official
      <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
      twitter account for latest news in the Vue world.
    </WelcomeItem>

    <WelcomeItem class="my-20">
      <template #icon>
        <SupportIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>

    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem class="my-10">
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
    <WelcomeItem>
      <template #icon>
        <LogoIcon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its sustainability. You can help
      us by
      <a target="_blank" href="https://vuejs.org/sponsor/">becoming a sponsor</a>.
    </WelcomeItem>
  </div>
</template>
