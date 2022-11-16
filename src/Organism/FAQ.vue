<template>
  <AtomSection
    id="faq"
    v-aos
    tp="large"
    bp="large"
    class="relative text-white transition-all duration-1000 ease-in-out"
  >
    <div class="mx-auto max-w-4xl">
      <AtomAnimate class="my-10">
        <MoleculeTitle
          title="FAQ"
          description="For business / support inquiries please contact us via
           discord or at support@swifttech.app"
        />
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </div>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'What is Swift Tech?',
          description: `Swift Technologies is a suite of tools and services for 
          users and business’s in the web3 space. `,
        },
        {
          title: 'How much does Swift AIO cost?',
          description: `TBD`,
        },
        {
          title: 'When do you restock?',
          description: `Swift AIO will restock periodically via Twitter and Discord.`,
        },
        {
          title: 'What operating systems do you support?',
          description: `We currently support both macOS and Windows.`,
        },
        {
          title: 'How can I purchase Swift AIO?',
          description: `To purchase Swift AIO please visit our discord or dashboard to
           join our waitlist and see if we have any available keys. `,
        },
        {
          title: 'How can I check my license key?',
          description: `Please visit our dashboard to check your active license keys. 
          https://dashboard.swifttech.app`,
        },
      ],
    };
  },
};
</script>
