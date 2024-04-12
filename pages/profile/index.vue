<script setup>
import Echo from "laravel-echo";
import Pusher from "pusher-js";

definePageMeta({
    title: "Profile",
    middleware: "auth"
});

// Stores
const authStore = useAuthStore();

// Composable
const user = useSupabaseUser();
const message = useMessage();
const config = useRuntimeConfig();

useSeoMeta({
    ogTitle: "Profile",
    description: "User profile",
    ogDescription: "User profile"
});

// Props
// ...

// Data
const gemOptions = [
    {
        value: 50,
        label: "50 gems"
    },
    {
        value: 100,
        label: "100 gems"
    },
    {
        value: 200,
        label: "200 gems"
    },
    {
        value: 500,
        label: "500 gems"
    }
];
const gem = ref(0);
const isBuying = ref(false);
const paymentPercent = ref(20);
const processingMessage = ref("Waiting for your payment");
const errorMessage = ref("");
const echo = ref(null);

// Computed
// ...

// Event
// ...

// Methods
const checkoutQR = async () => {
    if (gem.value < 1 || gem.value > 1000) {
        message.error("Invalid gem amount");
        return;
    }

    isBuying.value = true;

    try {
        const response = await $fetch(`${ config.public.api.serverUrl }/api/buy-gem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + window?.localStorage?.getItem("accessToken")
            },
            body: {
                gem: gem.value
            },
            retry: 2,
            credentials: "include"
        });

        window.open(response.url, "Payment", "width=1024,height=600");
    } catch (e) {
        message.error("Failed to get more gem! Please try again later");
        isBuying.value = false;
    }
};

const checkoutVisa = async () => {
    message.error("This feature is under development");
};

const cancelPayment = () => {
    isBuying.value = false;
    paymentPercent.value = 20;
    processingMessage.value = "Waiting for your payment";
    errorMessage.value = "";
};

// Hooks
onMounted(() => {
    window.Pusher = Pusher;
    echo.value = new Echo({
        broadcaster: "pusher",
        key: config.public.pusher.key,
        cluster: config.public.pusher.cluster,
        forceTLS: true,
        logToConsole: true,
        auth: {
            headers: {
                Authorization: `Bearer ${ window.localStorage.getItem("accessToken") }`
            }
        },
        authorizer: (channel, options) => {
            return {
                authorize: async (socketId, callback) => {
                    try {
                        const response = await $fetch(`${config.public.api.serverUrl}/broadcasting/auth`, {
                            method: "POST",
                            body: {
                                socket_id: socketId,
                                channel_name: channel.name
                            },
                            headers: {
                                Authorization: `Bearer ${ window.localStorage.getItem("accessToken") }`
                            }
                        });
                        callback(null, response);
                    } catch (error) {
                        callback(error);
                    }
                }
            };
        }
    });
    echo.value.private(`checkout.${window?.localStorage?.getItem("serverId")}`)
        .listen(".payment.received", async (e) => {
            const amount = e.amount;
            if (amount === 0) {
                paymentPercent.value = 0;
                processingMessage.value = "";
                errorMessage.value = e.message;
            } else if (amount === 100) {
                cancelPayment();
                message.success("Payment received! Your transaction is successful", {
                    closable: true,
                    duration: 10000
                });
                await authStore.fetchUserInformation();
            } else {
                paymentPercent.value = amount;
                processingMessage.value = e.message;
                errorMessage.value = "";
            }
        });
});

onBeforeUnmount(() => {
    echo.value.leave(`checkout.${window?.localStorage?.getItem("serverId")}`);
});
</script>

<template>
    <div v-if="user" class="mx-auto flex max-w-3xl flex-col gap-8 py-8">
        <div class="flex items-start gap-5 rounded border bg-white p-5 shadow-sm">
            <div class="relative w-fit">
                <img :src="user?.user_metadata?.avatar_url" class="h-24 w-24 rounded-md object-cover" alt="">
                <div
                    class="absolute top-0 right-0 h-5 w-5 translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-white bg-green-500"></div>
            </div>
            <div>
                <h1 class="flex items-center gap-1 text-xl font-semibold">
                    {{ user?.user_metadata?.full_name }}
                    <NaiveIcon name="ph:seal-check-duotone" class="text-green-500"/>
                </h1>
                <p class="mt-1 flex items-center gap-1 text-gray-400">
                    <NaiveIcon name="ph:envelope-open-duotone"/>
                    {{ user?.email }}
                </p>
                <div
                    class="mt-4 flex w-fit items-center rounded-lg border border-dashed border-gray-400 px-2 py-1 font-bold text-violet-600 -ml-0.5">
                    <NaiveIcon name="mage:gem-c-fill" :size="16"/>
                    {{ authStore.balance }}
                </div>
            </div>
            <NaiveIcon name="ph:fingerprint-simple-duotone" class="ml-auto text-gray-200" :size="16 * 6"/>
        </div>

        <div class="flex flex-col rounded border bg-white p-5 shadow-sm">
            <div class="flex items-center justify-between">
                <label class="font-semibold text-md mb-4">Get more gem</label>
                <span class="text-gray-300 text-xs italic flex items-center">
                    1
                    <NaiveIcon name="mage:gem-c-fill" :size="14"/>
                    = 1000 VND = 0.040 USD
                </span>
            </div>
            <div class="flex items-baseline gap-2">
                <NRadioGroup v-model:value="gem" name="radio-buttongroup" size="medium" :disabled="isBuying">
                    <NRadioButton
                        v-for="option in gemOptions"
                        :key="option.value"
                        :value="option.value"
                    >
                        <div class="flex items-center gap-1">
                            <NaiveIcon name="mage:gem-c-fill" :size="16"/>
                            {{ option.label }}
                        </div>
                    </NRadioButton>
                </NRadioGroup>
                <span class="text-xs text-gray-200">- or -</span>
                <NInputNumber v-model:value="gem" min="0" max="1000" step="1" size="medium" class="grow"
                              :disabled="isBuying"/>
            </div>
            <div class="flex items-center gap-2 mt-1">
                <NTooltip trigger="hover" placement="bottom">
                    <template #trigger>
                        <NButton color="#059669" size="medium" @click="checkoutQR" class="grow"
                                 :disabled="isBuying || gem < 1">
                            Checkout (QR code)
                        </NButton>
                    </template>
                    This feature is only available in Vietnam
                </NTooltip>
                <NButton color="#059669" size="medium" @click="checkoutVisa" class="grow"
                         :disabled="isBuying || gem < 1">
                    Checkout (VISA/MasterCard)
                </NButton>
            </div>

            <Transition name="page" mode="out-in">
                <div class="mt-4" v-if="isBuying">
                    <hr class="mb-4">
                    <div class="flex items-center">
                        <NButton quaternary circle type="error" class="mr-1" @click="cancelPayment">
                            <NaiveIcon name="iconamoon:close-circle-1-duotone"/>
                        </NButton>
                        <NProgress
                            type="line"
                            :percentage="paymentPercent"
                            :indicator-placement="'outside'"
                            processing
                            color="#059669"
                        >
                            {{ processingMessage }}
                        </NProgress>
                    </div>
                    <NAlert title="Warning" type="warning" class="mt-2" v-if="!errorMessage">
                        <ul>
                            <li>
                                Please do not close this window or navigate away while your payment is processing.
                            </li>
                        </ul>
                    </NAlert>
                    <NAlert title="Error" type="error" class="mt-2" v-if="errorMessage">
                        <ul>
                            <li>
                                {{ errorMessage }}
                            </li>
                        </ul>
                    </NAlert>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>

</style>
