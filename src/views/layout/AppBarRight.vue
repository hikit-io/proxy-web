<script lang="ts" setup>
import { useAppBar } from '@/composable/useAppBar'
import { useAccessToken } from '@/composable/useAccessToken'
import { useGetAppBarRightLazyQuery } from '@/composable/useAuthService'
import { computed, watch } from 'vue'
import { Dialog } from '@varlet/ui'
import '@varlet/ui/es/dialog/style'

const { showRight, onProfile, logout, showRightPop, toggleRightPop, colorMode, toggleColor } = useAppBar()

const { result, load } = useGetAppBarRightLazyQuery({ clientId: 'auth' })

watch(showRight, (val) => {
  if (val) {
    load()
  }
})

const { name: cookieName } = useAccessToken()

const name = computed(() => result.value?.profile.name ?? cookieName)
const account = computed(() => result.value?.profile.account ?? '')
const avatar = computed(() => result.value?.profile.avatar ?? '')

const onLogout = () => {
  Dialog({
    message: 'You will be sign out from .hikit.io website, sure?',
    onConfirm: () => {
      logout()
    },
  })
}

const themeIcon = computed(() => (colorMode.value == 'dark' ? 'weather-night' : 'white-balance-sunny'))

const onTheme = () => {
  toggleColor(colorMode.value == 'dark' ? 'light' : 'dark')
}
</script>

<template>
  <var-space class="app-bar-right" :align="'center'" :justify="'center'" :size="'small'">
    <var-button class="theme-btn" @click="onTheme" text outline>
      <var-icon :name="themeIcon" :transition="100" />
    </var-button>
    <var-avatar class="avatar" v-if="showRight" :src="avatar" @click="toggleRightPop(true)" size="32">
      {{ name.toString().at(0) }}
    </var-avatar>
  </var-space>
  <var-popup class="app-bar-right-popup" position="right" v-model:show="showRightPop">
    <div class="app-bar-right-popup__body">
      <div class="profile">
        <var-avatar :src="avatar" class="avatar" size="small">{{ name.toString().at(0) }}</var-avatar>
        <var-space class="info" :direction="'column'" size="mini" inline>
          <div class="name">{{ name }}</div>
          <div class="account">{{ account }}</div>
        </var-space>
        <var-button @click="toggleRightPop(false)" text>
          <var-icon name="window-close" />
        </var-button>
      </div>
      <var-divider />
      <div class="app-bar-right-popup__menu">
        <var-button class="menu-btn" @click="onProfile" text>
          <var-space>
            <var-icon name="card-account-details-outline" />
            Profile
          </var-space>
        </var-button>
        <var-button class="menu-btn" @click="onLogout" text>
          <var-space>
            <var-icon name="power" />
            Sign out
          </var-space>
        </var-button>
      </div>
    </div>
  </var-popup>
</template>

<style scoped>
.app-bar-right .avatar {
  cursor: pointer;
  margin-right: 0.6em;
}

.app-bar-right .theme-btn {
  width: 100%;
  height: auto;
  padding: 0.2em;
}

.app-bar-right-popup__body {
  min-width: 300px;
  padding: 1.5em;
}

.app-bar-right-popup__menu {
  display: flex;
  flex-direction: column;
}

.app-bar-right-popup__menu .menu-btn {
  justify-content: flex-start;
  padding-left: 0.5em;
}

.app-bar-right-popup__menu .menu-btn .var-space {
  align-items: center;
}

.app-bar-right-popup__body .profile {
  display: flex;
  align-items: center;
}

.app-bar-right-popup__body .profile .account {
  font-size: 0.8em;
  font-weight: bold;
}

.app-bar-right-popup__body .profile .info {
  flex: 1;
  padding-left: 0.8em;
}
</style>
