<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProfileQuery } from '@/composable/useService'
import { useClipboard } from '@vueuse/core'
import { Snackbar } from '@varlet/ui'
import { useAccessToken } from '@/composable/useAccessToken'

const { name } = useAccessToken()
const { result } = useProfileQuery()

const devices = ref([
  {
    title: 'Ios',
    ip: '1.1.1.1',
    type: 'iOS',
  },
  {
    title: 'Ma1c',
    ip: '1.1.1.1',
    type: 'Mac',
  },
])

const link = computed(() => `https://api.hikit.io/proxy/subscription?tick=${result?.value?.profile.profile.secret ?? 'Waiting'}`)

const maxDevice = computed(() => result?.value?.profile.profile.maxDevice ?? 'Waiting')

const { copy } = useClipboard()

const onCopy = () => {
  copy(link.value).then(() => {
    Snackbar.success({ content: 'Copy success' })
  })
}
</script>

<template>
  <div class="main">
    <var-space class="main_space" direction="column">
      <h1>Hi,{{ name }}</h1>
      <var-list>
        <var-cell title="Max Device" border>
          <template #extra>{{ maxDevice }}</template>
        </var-cell>
        <var-cell title="Used" border>
          <template #extra>Unlimited</template>
        </var-cell>
      </var-list>
<!--      <h3 class="h3">Online Devices (2/3)</h3>-->
      <var-list v-if="false">
        <var-cell v-for="item in devices" :title="item.title" :description="item.ip" border>
          <template #extra>
            <var-button type="danger" size="small" text outline round>
              <var-icon name="window-close" />
            </var-button>
          </template>
        </var-cell>
      </var-list>
      <var-input :model-value="link" rows="4" textarea disabled></var-input>
      <var-space :justify="'center'">
        <var-button @click="onCopy" type="primary" text outline> Copy Subscribe Link</var-button>
        <var-button type="danger" text outline> Reset Subscribe</var-button>
      </var-space>
    </var-space>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}

.main_space {
  min-width: 300px;
}

.h3 {
  margin-block: 0;
}
</style>
