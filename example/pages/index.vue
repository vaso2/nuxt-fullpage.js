<template>
  <div>
    <FullPage id="fullpage" :options="options">
      <div class="section fp-table active">
        <div class="fp-tableCell">
          <h3>Section 1</h3>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </FullPage>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          afterLoad: this.afterLoad,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
      afterLoad () {
      }
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .fp-tableCell {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .section.fp-table {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100vh;
  }
</style>
