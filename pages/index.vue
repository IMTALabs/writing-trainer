<script setup>
definePageMeta({
    layout: "empty",
    title: "Homepage"
});

defineOgImageComponent("Frame", {
    colorMode: "dark",
    title: "LAN Trainer",
    description: "A collection of tools for improving your English skills",
    theme: "#056f37"
});

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/assets/fonts/iconfonts/font-awesome/stylesheet.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/fonts/webfonts/inter/stylesheet.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/fonts/webfonts/dm-sans/stylesheet.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/css/vendors/swiper-bundle.min.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/css/vendors/jos.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/css/vendors/menu.css"
        },
        {
            rel: "stylesheet",
            href: "/assets/css/custom.css"
        }
    ],
    script: [
        {
            src: "/assets/js/vendors/counterup.js",
            type: "module",
            tagPosition: "bodyClose"
        },
        {
            src: "/assets/js/vendors/swiper-bundle.min.js",
            tagPosition: "bodyClose"
        },
        {
            src: "/assets/js/vendors/fslightbox.js",
            tagPosition: "bodyClose"
        },
        {
            src: "/assets/js/vendors/jos.min.js",
            tagPosition: "bodyClose"
        },
        {
            src: "/assets/js/vendors/menu.js",
            tagPosition: "bodyClose"
        },
        {
            src: "/assets/js/main.js",
            tagPosition: "bodyClose"
        }
    ]
});
</script>

<template>
    <div class="page-wrapper relative z-[1] bg-white">
        <!--...::: Header Start :::... -->
        <header class="site-header site-header--absolute is--white py-3" id="sticky-menu">
            <div class="container-default">
                <div class="flex items-center justify-between gap-x-8">
                    <!-- Header Logo -->
                    <h1 class="m-0 flex items-center gap-2 text-lg font-semibold font-body">
                        <NuxtLink to="/" class="flex items-center gap-1">
                            <img src="https://img.icons8.com/pulsar-color/48/pencil.png" class="h-8 w-8" alt="">
                            <span class="text-black tracking-normal">LAN Trainer</span>
                        </NuxtLink>
                        <NTag type="error" size="tiny" class="tracking-normal">
                            Beta
                        </NTag>
                    </h1>
                    <!-- Header Logo -->

                    <!-- Header Navigation -->
                    <div class="menu-block-wrapper">
                        <div class="menu-overlay"></div>
                        <nav class="menu-block" id="append-menu-header">
                            <div class="mobile-menu-head">
                                <div class="go-back">
                                    <i class="fa-solid fa-angle-left"></i>
                                </div>
                                <div class="current-menu-title"></div>
                                <div class="mobile-menu-close">&times;</div>
                            </div>
                            <ul class="site-menu-main">
                                <li class="nav-item nav-item-has-children">
                                    <NuxtLink to="/" class="nav-link-item drop-trigger">Home</NuxtLink>
                                </li>
                                <li class="nav-item nav-item-has-children">
                                    <NuxtLink to="#section-features" class="nav-link-item drop-trigger">Features
                                    </NuxtLink>
                                </li>
                                <li class="nav-item nav-item-has-children">
                                    <NuxtLink to="#section-about" class="nav-link-item drop-trigger">About</NuxtLink>
                                </li>
                                <li class="nav-item nav-item-has-children">
                                    <NuxtLink to="#section-faq" class="nav-link-item drop-trigger">FAQ</NuxtLink>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <!-- Header Navigation -->

                    <!-- Header User Event -->
                    <div class="flex items-center gap-6">
                        <NuxtLink to="/login" class="btn-text hidden hover:text-ColorViolet sm:inline-block">Login
                        </NuxtLink>

                        <NuxtLink to="/essay" class="group relative hidden sm:inline-block">
                            <div class="btn is-rounded is-primary">Get started</div>
                            <div
                                class="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0"></div>
                        </NuxtLink>
                        <!-- Responsive Offcanvas Menu Button -->
                        <div class="block lg:hidden">
                            <button id="openBtn" class="hamburger-menu mobile-menu-trigger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <!-- Header User Event -->
                </div>
            </div>
        </header>
        <!--...::: Header End :::... -->

        <main class="main-wrapper relative overflow-hidden">
            <!--...::: Hero Section Start :::... -->
            <section class="section-hero">
                <div class="relative z-10">
                    <!-- Hero Space -->
                    <div class="pb-20 pt-[100px] md:pt-[120px] lg:pb-[110px] lg:pt-[190px]">
                        <!-- Section Container -->
                        <div class="container-default">
                            <!-- Hero Area Block -->
                            <div
                                class="grid items-center gap-x-[60px] gap-y-12 lg:grid-cols-[1fr_0.8fr] xl:gap-x-[100px]">
                                <!-- Hero Content Block -->
                                <div class="mx-auto max-w-[580px] text-center lg:max-w-none lg:text-left">
                                    <h1 class="mb-6 font-DmSans text-[32px] font-bold leading-[1.04] -tracking-[1px] sm:text-5xl lg:text-[65px] xl:text-[78px] xxl:text-[90px]">
                                        Keep learning and boost your knowledge
                                    </h1>
                                    <p class="mb-8 lg:mb-[50px]">
                                        Master English with our all-in-one toolkit! Explore vocabulary, grammar,
                                        pronunciation, and practice sessions tailored to your level. Elevate your skills
                                        effortlessly!
                                    </p>

                                    <NuxtLink to="/essay" class="group relative inline-block">
                                        <div class="btn is-large is-rounded is-primary">
                                            Get started
                                        </div>
                                        <div
                                            class="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0"></div>
                                    </NuxtLink>
                                </div>
                                <!-- Hero Content Block -->

                                <!-- Hero Image Block -->
                                <div class="flex justify-center lg:justify-start">
                                    <div class="relative inline-block">
                                        <img src="/4354122.png" alt="hero-img" class="max-w-full"/>
                                    </div>
                                </div>
                                <!-- Hero Image Block -->
                            </div>
                            <!-- Hero Area Block -->
                        </div>
                        <!-- Section Container -->
                    </div>
                    <!-- Hero Space -->

                    <!-- Hero Background Shape -->
                    <img src="/assets/img/elements/hero-4-bg-shape.svg" alt="hero-4-bg-shape" height="1038" width="1038"
                         class="absolute right-0 top-0 -z-10"/>
                    <!-- Background Divider Shape -->
                    <div
                        class="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x"></div>
                </div>
            </section>
            <!--...::: Hero Section End :::... -->

            <!--...::: Features Section Start :::... -->
            <section class="section-features" id="section-features">
                <!-- Section Background -->
                <div class="relative z-10 bg-[#F5EFEB]">
                    <!-- Section Space -->
                    <div class="section-space">
                        <!-- Section Container -->
                        <div class="container-default">
                            <!-- Section Content Wrapper -->
                            <div class="jos mb-[60px] xl:mb-20">
                                <!-- Section Content Block -->
                                <div class="mx-auto max-w-[636px]">
                                    <h2 class="text-center font-DmSans -tracking-[1px]">
                                        Special features that make our website the best
                                    </h2>
                                </div>
                                <!-- Section Content Block -->
                            </div>
                            <!-- Section Content Wrapper -->

                            <!-- Feature List -->
                            <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                                <!-- Features Item -->
                                <div class="jos" data-jos_animation="fade-right" data-jos_delay="0">
                                    <div
                                        class="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                                        <NaiveIcon class="mb-[30px] w-auto" name="ph:pencil-line-duotone" :size="70"/>
                                        <div class="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                                            Essay Assessment
                                        </div>
                                        <p class="line-clamp-6">
                                            Our AI-powered tool helps you write better essays with
                                            grammar and plagiarism checks.
                                        </p>
                                    </div>
                                </div>
                                <!-- Features Item -->
                                <!-- Features Item -->
                                <div class="jos" data-jos_animation="fade-right" data-jos_delay="0.3">
                                    <div
                                        class="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                                        <NaiveIcon class="mb-[30px] w-auto" name="ph:check-fat-duotone" :size="70"/>
                                        <div class="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                                            Grammar Checker
                                        </div>
                                        <p class="line-clamp-6">
                                            Elevate your writing with our Grammar Checker feature. Instantly improve
                                            your grammar, punctuation, and sentence structure for flawless
                                            communication.
                                        </p>
                                    </div>
                                </div>
                                <!-- Features Item -->
                                <!-- Features Item -->
                                <div class="jos" data-jos_animation="fade-right" data-jos_delay="0.6">
                                    <div
                                        class="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                                        <NaiveIcon class="mb-[30px] w-auto" name="ph:game-controller-duotone"
                                                   :size="70"/>
                                        <div class="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                                            Vocab Trainer
                                        </div>
                                        <p class="line-clamp-6">
                                            Expand your lexicon effortlessly with our Vocab Trainer! Learn new words,
                                            boost retention, and enhance your vocabulary in a gamified and interactive
                                            way.
                                        </p>
                                    </div>
                                </div>
                                <!-- Features Item -->
                                <!-- Features Item -->
                                <div class="jos" data-jos_animation="fade-right" data-jos_delay="0.9">
                                    <div
                                        class="h-full rounded-[10px] border-2 border-ColorBlack p-[30px] transition-all duration-300 hover:-rotate-3 hover:bg-white">
                                        <NaiveIcon class="mb-[30px] w-auto" name="ph:pencil-simple-line-duotone"
                                                   :size="70"/>
                                        <div class="mb-4 text-2xl font-semibold -tracking-[0.5px] text-ColorBlack">
                                            Dictation
                                        </div>
                                        <p class="line-clamp-6">
                                            Perfect your listening and transcription skills with our dictation feature.
                                            Listen to passages and transcribe them accurately, honing your language
                                            comprehension and writing abilities.
                                        </p>
                                    </div>
                                </div>
                                <!-- Features Item -->
                            </div>
                            <!-- Feature List -->
                        </div>
                        <!-- Section Container -->
                    </div>
                    <!-- Section Space -->

                    <!-- Feature Element - 1 -->
                    <img src="/assets/img/elements/home-4-features-element.svg" alt="home-4-features-element"
                         width="220"
                         height="180" class="absolute left-[164px] top-[35px] -z-10"/>
                </div>
                <!-- Section Background -->

                <!-- Background Divider Shape -->
                <div
                    class="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x"></div>
            </section>
            <!--...::: Features Section End :::... -->

            <!--...::: Content Section Start :::... -->
            <section class="section-content" id="section-about">
                <!-- Section Space -->
                <div class="section-space">
                    <!-- Section Container -->
                    <div class="container-default">
                        <!-- Content Area -->
                        <div
                            class="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_minmax(0,_1fr)] lg:gap-x-20 xl:gap-x-[110px]">
                            <!-- Content Block -->
                            <div class="jos order-2" data-jos_animation="fade-right">
                                <!-- Section Wrapper -->
                                <div>
                                    <!-- Section Block -->
                                    <div class="mb-5">
                                        <h2 class="font-DmSans -tracking-[1px]">
                                            Propel your career & expand your knowledge at any level
                                        </h2>
                                    </div>
                                    <!-- Section Block -->
                                </div>
                                <!-- Section Wrapper -->
                                <p>
                                    Unlock the full potential of your English language skills with our comprehensive
                                    toolkit, meticulously crafted to cater to learners of all levels and preferences.
                                    Immerse yourself in a wealth of resources spanning vocabulary expansion, grammar
                                    refinement, pronunciation mastery, and immersive practice sessions. Dive into
                                    interactive exercises, enriching reading materials, engaging audiovisual content,
                                    and personalized learning paths tailored to your specific goals.
                                </p>
                                <p>
                                    Whether you're a
                                    beginner embarking on your language journey or an advanced learner striving for
                                    fluency, our toolkit provides the guidance and support you need to excel. Join our
                                    community of language enthusiasts and embark on a transformative journey towards
                                    linguistic proficiency and confidence in English communication.
                                </p>
                                <div class="mt-[50px]">
                                    <NuxtLink to="/essay" class="group relative z-10 inline-block">
                                        <div class="btn is-large is-rounded is-primary">
                                            Get started
                                        </div>
                                        <div
                                            class="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0"></div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <!-- Content Block -->

                            <!-- Content Image Block -->
                            <div class="jos order-1 flex justify-center" data-jos_animation="fade-left">
                                <img src="/4354123.png" alt="content-img-1" width="450"
                                     height="532"/>
                            </div>
                            <!-- Content Image Block -->
                        </div>
                        <!-- Content Area -->
                    </div>
                    <!-- Section Container -->
                </div>
                <!-- Section Space -->
            </section>
            <!--...::: Content Section End :::... -->

            <!--...::: Ticket Slider Section Start :::... -->
            <div class="section-topic">
                <div class="relative">
                    <!-- Section Space -->
                    <div class="section-space-bottom">
                        <!-- Section Container -->
                        <div class="container-default">
                            <!-- Section Content Wrapper -->
                            <div class="jos mb-[60px] xl:mb-20">
                                <!-- Section Content Block -->
                                <div class="mx-auto max-w-[636px]">
                                    <h2 class="text-center font-DmSans -tracking-[1px]">
                                        Here are numerous topics that will enhance your skills
                                    </h2>
                                </div>
                                <!-- Section Content Block -->
                            </div>
                            <!-- Section Content Wrapper -->
                        </div>
                        <!-- Section Container -->

                        <!-- Ticket Slider Area -->
                        <div>
                            <!-- Ticket Wrapper -->
                            <div class="flex flex-row flex-nowrap py-5">
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-right-to-left mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                            </div>
                            <!-- Ticket Wrapper -->
                            <!-- Ticket Wrapper -->
                            <div class="flex flex-row flex-nowrap py-5">
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Computer Science
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Art & Music
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Information Technology
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Web Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        UI/UX Design
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                                <!-- Ticket Content -->
                                <div
                                    class="horizontal-slide-from-left-to-right mx-3 flex flex-row flex-nowrap items-start justify-start gap-x-6 whitespace-nowrap">
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Digital Marketing
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Lifestyle
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Healthcare
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Programming Languages
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Time Management
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        iOS Development
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Leadership Skills
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Business
                                    </div>
                                    <!-- Ticket Tag -->
                                    <!-- Ticket Tag -->
                                    <div
                                        class="relative z-10 block rounded-[50px] border-2 border-b-[5px] border-ColorBlack bg-[#F5EFEB] px-6 py-2 text-center text-base font-bold text-ColorBlack md:py-4">
                                        Photography
                                    </div>
                                    <!-- Ticket Tag -->
                                </div>
                                <!-- Ticket Content -->
                            </div>
                            <!-- Ticket Wrapper -->
                        </div>
                        <!-- Ticket Slider Area -->
                    </div>
                    <!-- Section Space -->
                </div>
            </div>
            <!--...::: Ticket Slider Section End :::... -->

            <!--...::: Content Section Start :::... -->
            <section class="section-content">
                <!-- Section Space -->
                <div class="section-space">
                    <!-- Section Container -->
                    <div class="container-default">
                        <!-- Content Area -->
                        <div
                            class="grid items-center gap-x-[60px] gap-y-10 md:grid-cols-[1fr_minmax(0,_0.8fr)] lg:gap-x-20 xl:gap-x-[110px]">
                            <!-- Content Block -->
                            <div class="jos order-1" data-jos_animation="fade-right">
                                <!-- Section Wrapper -->
                                <div>
                                    <!-- Section Block -->
                                    <div class="mb-5">
                                        <h2 class="font-DmSans -tracking-[1px]">
                                            Share your knowledge & experience with others
                                        </h2>
                                    </div>
                                    <!-- Section Block -->
                                </div>
                                <!-- Section Wrapper -->
                                <p>
                                    We believe everyone has something to give. Share your unique
                                    skills & experience with students around the world by
                                    teaching free or paid.
                                </p>
                                <ul class="flex flex-col gap-5 font-semibold text-ColorBlack">
                                    <li>
                                        <span class="mr-3 inline-block text-xl"><i class="fa-solid fa-badge-check"></i></span>
                                        Free version can save unlimited workouts & custom routines
                                    </li>
                                    <li>
                                        <span class="mr-3 inline-block text-xl"><i class="fa-solid fa-badge-check"></i></span>
                                        Track progress with graphs and automatically back up data
                                    </li>
                                    <li>
                                        <span class="mr-3 inline-block text-xl"><i class="fa-solid fa-badge-check"></i></span>
                                        Connect easily with instructor for tips, feedback and
                                        support
                                    </li>
                                </ul>
                                <div class="mt-[50px]">
                                    <NuxtLink to="/" class="group relative z-10 inline-block">
                                        <div class="btn is-large is-rounded is-primary">
                                            Get started
                                        </div>
                                        <div
                                            class="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0"></div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <!-- Content Block -->

                            <!-- Content Image Block -->
                            <div class="jos order-2 flex justify-center" data-jos_animation="fade-left">
                                <img src="/4354124.png" alt="content-img-1" width="450"
                                     height="532"/>
                            </div>
                            <!-- Content Image Block -->
                        </div>
                        <!-- Content Area -->
                    </div>
                    <!-- Section Container -->
                </div>
                <!-- Section Space -->
            </section>
            <!--...::: Content Section End :::... -->

            <!--...::: Testimonial Section Start :::... -->
            <section class="section-testimonial">
                <div class="relative">
                    <!-- Section Container -->
                    <div class="container-default">
                        <!-- Section Content Wrapper -->
                        <div class="jos mb-[60px] xl:mb-20">
                            <!-- Section Content Block -->
                            <div class="mx-auto max-w-[670px]">
                                <h2 class="text-center font-DmSans -tracking-[1px]">
                                    Learners like you achieve their goals through our website
                                </h2>
                            </div>
                            <!-- Section Content Block -->

                            <!-- Testimonial Area -->
                            <div class="grid gap-x-6 md:grid-cols-2">
                                <!-- Testimonial Item  -->
                                <div class="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                                    <div class="flex gap-x-2 text-3xl text-ColorYellow">
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p class="mb-0 text-ColorBlack">
                                        "Using the English toolkit was a game-changer for me! Now, I feel much more
                                        confident communicating in English. Highly recommended!"
                                    </p>
                                    <div class="flex items-center gap-[10px]">
                                        <img src="/chloe.jpg" alt="testimonial-avatar"
                                             class="aspect-square w-12 object-cover"/>
                                        <div>
                                            <span class="block font-semibold text-ColorBlack">Chloe Đinh</span>
                                            <span class="text-sm leading-[1.42]">Student of TMU, VN</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Testimonial Item  -->
                                <!-- Testimonial Item  -->
                                <div class="flex flex-col gap-y-6 rounded-[10px] p-[30px]">
                                    <div class="flex gap-x-2 text-3xl text-ColorYellow">
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <p class="mb-0 text-ColorBlack">
                                        "I've tried various language learning tools, but none compare to this English
                                        toolkit. I've seen noticeable progress in my English skills since I started
                                        using it.”
                                    </p>
                                    <div class="flex items-center gap-[10px]">
                                        <img src="/milktea.jpeg" alt="testimonial-avatar"
                                             class="aspect-square w-12 object-cover"/>
                                        <div>
                                            <span class="block font-semibold text-ColorBlack">Milk Tea</span>
                                            <span class="text-sm leading-[1.42]">Student of TMU, VN</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Testimonial Item  -->
                            </div>
                            <!-- Testimonial Area -->
                        </div>
                        <!-- Section Content Wrapper -->
                    </div>
                    <!-- Section Container -->

                    <!-- Background Divider Shape -->
                    <div
                        class="min-h-[65px] w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x"></div>
                </div>
            </section>
            <!--...::: Testimonial Section End :::... -->

            <!--...::: FAQ Section Start :::... -->
            <section class="section-FAQ" id="section-faq">
                <div class="realative">
                    <!-- Section Background -->
                    <div class="bg-[#F5EFEB]">
                        <!-- Section Space -->
                        <div class="section-space">
                            <!-- Section Container -->
                            <div class="container-default">
                                <!-- FAQ Area -->
                                <div class="grid items-center gap-x-6 gap-y-10 md:grid-cols-2">
                                    <!-- Content Block -->
                                    <div class="jos" data-jos_animation="fade-right">
                                        <!-- Section Wrapper -->
                                        <div>
                                            <!-- Section Block -->
                                            <div class="mb-5">
                                                <h2 class="font-DmSans -tracking-[1px]">
                                                    Frequently asked questions about our website
                                                </h2>
                                            </div>
                                            <!-- Section Block -->
                                        </div>
                                        <!-- Section Wrapper -->
                                        <p>
                                            We encourage our clients to ask us any
                                            questions regarding our tools. We have a feedback form in our website
                                            where you can ask us any questions.
                                        </p>
                                    </div>
                                    <!-- Content Block -->

                                    <!-- FAQ Block -->
                                    <div class="jos flex justify-center" data-jos_animation="fade-left">
                                        <!-- Accordion List -->
                                        <ul class="mx-auto max-w-[1076px] rounded-[10px] border-4 border-ColorBlack">
                                            <!-- Accordion Item -->
                                            <li class="accordion-item active last:border-2-0 overflow-hidden border-b-4 border-ColorBlack p-[30px]">
                                                <!-- Accordion Header -->
                                                <div
                                                    class="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                                                    <button class="flex-1 text-left">
                                                        Q. How do I register?
                                                    </button>
                                                    <div class="accordion-icon-2 absolute right-0 top-0">
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <!-- Accordion Header -->
                                                <!-- Accordion Body -->
                                                <div class="accordion-body max-w-[826px] opacity-80">
                                                    <p class="pt-5">
                                                        You can use it instantly without any registration. However, if
                                                        you want to save your progress, you can register with your
                                                        email.
                                                    </p>
                                                </div>
                                                <!-- Accordion Body -->
                                            </li>
                                            <!-- Accordion Item -->
                                            <!-- Accordion Item -->
                                            <li class="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                                                <!-- Accordion Header -->
                                                <div
                                                    class="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                                                    <button class="flex-1 text-left">
                                                        Q. How much does it cost?
                                                    </button>
                                                    <div class="accordion-icon-2 absolute right-0 top-0">
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <!-- Accordion Header -->
                                                <!-- Accordion Body -->
                                                <div class="accordion-body max-w-[826px] opacity-80">
                                                    <p class="pt-5">
                                                        Currently, our beta version is free for all users. However, we
                                                        will have a premium version with more features in the future.
                                                    </p>
                                                </div>
                                                <!-- Accordion Body -->
                                            </li>
                                            <!-- Accordion Item -->
                                            <!-- Accordion Item -->
                                            <li class="accordion-item overflow-hidden border-b-4 border-ColorBlack p-[30px] last:border-b-0">
                                                <!-- Accordion Header -->
                                                <div
                                                    class="accordion-header relative pr-8 text-xl font-semibold text-ColorBlack">
                                                    <button class="flex-1 text-left">
                                                        Q. Is there a way I can support the website?
                                                    </button>
                                                    <div class="accordion-icon-2 absolute right-0 top-0">
                                                        <i class="fa-solid fa-chevron-down"></i>
                                                    </div>
                                                </div>
                                                <!-- Accordion Header -->
                                                <!-- Accordion Body -->
                                                <div class="accordion-body max-w-[826px] opacity-80">
                                                    <p class="pt-5">
                                                        Yes, you can support us by sharing our website with your friends
                                                        and family. We also have a feedback form where you can give us
                                                        suggestions.
                                                    </p>
                                                </div>
                                                <!-- Accordion Body -->
                                            </li>
                                            <!-- Accordion Item -->
                                        </ul>
                                        <!-- Accordion List -->
                                    </div>
                                    <!-- FAQ Block -->
                                </div>
                                <!-- FAQ Area -->
                            </div>
                            <!-- Section Container -->
                        </div>
                        <!-- Section Space -->
                    </div>
                    <!-- Section Background -->
                    <!-- Background Divider Shape -->
                    <div
                        class="min-h-[65px] w-full rotate-180 bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-contain bg-[center_bottom] bg-repeat-x"></div>
                </div>
            </section>
            <!--...::: FAQ Section End :::... -->

            <!--...::: Newsletter Section Start :::... -->
            <section class="section-newsletter">
                <div class="relative">
                    <!-- Section Space -->
                    <div class="section-space">
                        <!-- Section Container -->
                        <div class="container-default">
                            <!-- Newsletter Area -->
                            <div class="jos mx-auto flex max-w-[720px] flex-col justify-center text-center">
                                <h2 class="mb-5 font-DmSans -tracking-[1px]">
                                    Start using today and expand your knowledge at any level
                                </h2>
                                <p class="mb-[50px]">
                                    We have easily usable tools for all levels of learners. Start using our
                                    website today and improve your English skills.
                                </p>
                                <div class="flex flex-wrap justify-center gap-5">
                                    <NuxtLink to="/essay" class="group relative z-10 inline-block">
                                        <div class="btn is-large is-rounded is-primary">
                                            Get started
                                        </div>
                                        <div
                                            class="is-rounded absolute inset-0 -z-10 translate-y-[5px] bg-ColorBlack transition-all duration-300 ease-linear group-hover:translate-y-0"></div>
                                    </NuxtLink>
                                </div>
                            </div>
                            <!-- Newsletter Area -->
                        </div>
                        <!-- Section Container -->
                    </div>
                    <!-- Section Space -->

                    <!-- Background Divider Shape -->
                    <div
                        class="absolute bottom-0 left-0 -mb-px h-10 w-full bg-[url('/assets/img/elements/home-4-divider-shape-1.svg')] bg-cover bg-[center_top] bg-repeat-x xxl:h-14"></div>
                </div>
            </section>
            <!--...::: Newsletter Section End :::... -->
        </main>

        <!--...::: Footer Section Start :::... -->
        <footer class="section-footer">
            <div class="bg-[#F5EFEB]">
                <!-- Footer Area Center -->
                <div class="text-ColorBlack">
                    <!-- Footer Center Spacing -->
                    <div class="py-[60px] lg:py-20 xl:py-[100px]">
                        <!-- Section Container -->
                        <div class="container-default">
                            <!-- Footer Widget List -->
                            <div
                                class="grid gap-x-16 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_repeat(3,_auto)] xl:gap-x-24 xxl:gap-x-[134px]">
                                <!-- Footer Widget Item -->
                                <div class="flex flex-col gap-y-7 md:col-span-3 lg:col-span-1">
                                    <!-- Footer Logo -->
                                    <h2 class="m-0 flex items-center gap-2 text-lg font-semibold font-body">
                                        <NuxtLink to="/" class="flex items-center gap-1">
                                            <img src="https://img.icons8.com/pulsar-color/48/pencil.png" class="h-8 w-8"
                                                 alt="">
                                            <span class="text-black tracking-normal">LAN Trainer</span>
                                        </NuxtLink>
                                        <NTag type="error" size="tiny" class="tracking-normal">
                                            Beta
                                        </NTag>
                                    </h2>
                                    <!-- Footer Content -->
                                    <div>
                                        <!-- Footer About Text -->
                                        <div class="lg:max-w-[416px]">
                                            Master English with our all-in-one toolkit! Explore vocabulary, grammar,
                                            pronunciation, and practice sessions tailored to your level. Elevate your
                                            skills
                                            effortlessly!
                                        </div>
                                        <!-- Footer Mail -->
                                        <a href="mailto:imtalabs@imtatech.com"
                                           class="my-6 block underline-offset-4 transition-all duration-300 hover:underline">imtalabs@imtatech.com</a>
                                        <!-- Footer Social Link -->
                                        <div class="flex flex-wrap gap-5">
                                            <a href="https://github.com/IMTALabs" target="_blank"
                                               rel="noopener noreferrer"
                                               class="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-ColorBlack/10 text-sm text-ColorBlack transition-all duration-300 hover:bg-ColorPrimary hover:text-white"
                                               aria-label="github">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Footer Content -->
                                </div>
                                <!-- Footer Widget Item -->

                                <!-- Footer Widget Item -->
                                <div class="flex flex-col gap-y-7 md:col-span-1 lg:col-span-1">
                                    <!-- Footer Widget Title -->
                                    <div class="text-xl font-semibold capitalize">
                                        Primary Pages
                                    </div>
                                    <!-- Footer Navbar -->
                                    <ul class="flex flex-col gap-y-[10px] capitalize">
                                        <li>
                                            <NuxtLink to="/"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Home
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="#section-features"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Features
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="#section-about"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                About
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="#section-faq"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                FAQ
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Footer Widget Item -->

                                <!-- Footer Widget Item -->
                                <div class="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                    <!-- Footer Title -->
                                    <div class="text-xl font-semibold capitalize">
                                        Utility pages
                                    </div>
                                    <!-- Footer Title -->

                                    <!-- Footer Navbar -->
                                    <ul class="flex flex-col gap-y-[10px] capitalize">
                                        <li>
                                            <NuxtLink to="/essay"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Essay Assessment
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/typo"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Grammar Checker
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/vocab"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Vocab Trainer
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/coming-soon"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Dictation
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Footer Widget Item-->

                                <!-- Footer Widget Item -->
                                <div class="flex flex-col gap-y-6 md:col-span-1 lg:col-span-1">
                                    <!-- Footer Title -->
                                    <div class="text-xl font-semibold capitalize">
                                        Resources
                                    </div>
                                    <!-- Footer Title -->

                                    <!-- Footer Navbar -->
                                    <ul class="flex flex-col gap-y-[10px] capitalize">
                                        <li>
                                            <NuxtLink to="/privacy"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Privacy policy
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/term"
                                                      class="hover:opcity-100 text-ColorBlack underline-offset-4 transition-all duration-300 ease-linear hover:underline">
                                                Terms & Conditions
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Footer Widget Item -->
                            </div>
                            <!-- Footer Widget List -->
                        </div>
                        <!-- Section Container -->
                    </div>
                    <!-- Footer Center Spacing -->
                </div>
                <!-- Footer Area Center -->
                <div class="horizontal-line bg-ColorBlack"></div>
                <!-- Footer Bottom -->
                <div>
                    <!-- Footer Bottom Spacing -->
                    <div class="py-[18px]">
                        <!-- Section Container -->
                        <div class="container-default">
                            <div class="text-center">
                                &copy; Copyright 2024, All Rights Reserved by IMTALabs
                            </div>
                        </div>
                        <!-- Section Container -->
                    </div>
                    <!-- Footer Bottom Spacing -->
                </div>
                <!-- Footer Bottom -->
            </div>
        </footer>
        <!--...::: Footer Section End :::... -->
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/landing.scss";
</style>
