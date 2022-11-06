<template>
  <div>
    <input type="text" v-model="searchTerm" />
    <div v-if="data">
      <div v-for="amber in data.ambers" :key="amber.id">
        <p class="text-4xl font-bold">{{ amber.title }}</p>
        <p>{{ amber.body }}</p>
        <p class="underline">@{{ amber.user.name }}</p>
      </div>
    </div>
    <div v-else-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import AMBERS_QUERY from '../graphql/ambers.query.gql'

const searchTerm = ref('')
const data = reactive(ref(null))
const error = reactive(ref(null))

async function fetchAmbers() {
  const response = await useAsyncQuery(AMBERS_QUERY, { search: searchTerm.value })
  console.log(response)
  data.value = response.data
  error.value = response.error
}

onBeforeMount(() => {
  console.log('mount')
  fetchAmbers()
})

watch(searchTerm, async (newValue) => {
  fetchAmbers()
})
</script>
