<script setup lang="ts">
import * as yup from "yup";
import type { FormSubmitEvent } from "@nuxt/ui";

const toast = useToast();
const schema = yup.object({
  name: yup.string().required("Your name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Your email is required"),
  message: yup.string().required("Message is required"),
});

type Schema = yup.InferType<typeof schema>;

const state = reactive<Schema>({
  name: "",
  email: "",
  message: "",
});

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  const { data: emailData, error } = await $fetch("/api/send", {
    method: "POST",
    body: {
      name: event.data.name,
      email: event.data.email,
      message: event.data.message,
    },
  });

  if (error) {
    toast.add({
      title: "Error",
      description:
        "Failed to send message, if issue persists, please contact me directly at viktor@meduneckij.lt.",
      color: "error",
    });
  } else {
    toast.add({
      title: "Success",
      description: "Message sent successfully",
      color: "success",
    });

    state.name = "";
    state.email = "";
    state.message = "";
  }
};
</script>

<template>
  <div>
    <div class="flex flex-col justify-center p-4">
      <h2 class="font-bold">Let's talk</h2>
      <UForm
        :schema="schema"
        :state="state"
        @submit="onSubmit"
        class="py-4 px-2 min-w-[280px] md:min-w-[600px] space-y-6"
      >
        <UFormField label="Your name" name="name" required>
          <UInput v-model="state.name" class="w-full" size="xl" />
        </UFormField>

        <UFormField label="Your email" name="email" required>
          <UInput v-model="state.email" type="email" class="w-full" size="xl" />
        </UFormField>

        <UFormField label="Message" name="message" required>
          <UTextarea
            v-model="state.message"
            placeholder="How can I help?"
            class="w-full resize-none"
            size="xl"
            :rows="4"
            autoresize
          />
        </UFormField>
        <UButton
          type="submit"
          size="xl"
          class="mt-4 cursor-pointer"
          trailingIcon="i-lucide:send"
          >Send Message</UButton
        >
      </UForm>
    </div>
  </div>
</template>
