<template>
  <div>
    <label v-if="label" class="text-sm text-white">
      {{ label }}
    </label>
    <Field v-bind="{
        ...$attrs,
        onInput: updateValue
      }"
      :name="name" :value="modelValue" :placeholder="placeholder"
      class="w-80 bg-slate-100 rounded border border-slate-400 mt-2 py-2 px-4 text-sm" />
  </div>
</template>

<script setup>
import { Field } from 'vee-validate'

const props = defineProps({
  modelValue: [String, Number],
  name: String,
  label: String,
  placeholder: String
})

const emit = defineEmits(['update:modelValue'])
const updateValue = ((event) => {
  emit('update:modelValue', event.target.value)
})
</script>
