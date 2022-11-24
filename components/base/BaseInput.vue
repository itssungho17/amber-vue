<template>
  <div class="w-full ml-6 flex flex-col">
    <label v-if="label" class="text-sm">
      {{ label }}
    </label>
    <input v-bind="{
        ...$attrs,
        onInput: updateValue
      }"
      :id="uuid" :value="modelValue" :placeholder="placeholder"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : false" :class="{ error }"
      class="w-80 bg-slate-100 rounded border border-slate-400 mt-2 py-2 px-4 text-sm">
    <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
      {{ error }}
    </BaseErrorMessage>
  </div>
</template>

<script setup>
import UniqueID from '~~/features/UniqueID'
import SetupFormComponent from '~~/features/SetupFormComponent'

const props = defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  error: String
})

const uuid = UniqueID().getID()

const emit = defineEmits(['update:modelValue'])
const { updateValue } = SetupFormComponent(props, emit)
</script>
