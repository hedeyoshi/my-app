<template>
  <div id="app">
    <h2>引数なし</h2>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h2>引数付き</h2>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol>
    <!-- <p>
      引数付きゲッターの itemB / nameB の書き方は便利ですが、結果はキャッシュされません。 算出プロパティを通さない場合も同じです。 何度も使用していたり、コンポーネントの仮想 DOM に変化があるたびに呼び出されてしまうため、コストの高い算出処理をしている場合には注意しましょう！
    </p> -->
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    // 引数なしゲッター
    count() { return this.$store.getters.count },   // 1
    max()   { return this.$store.getters.max },     // 2
    // 引数付きゲッター
    itemA() { return this.$store.getters.item(1) }, // 1 👍 いいね
    itemB() { return this.$store.getters.item },    // 2 👎 よくないね
    nameA() { return this.$store.getters.name(1) }, // 3 👍 いいね
    nameB() { return this.$store.getters.name },    // 4 👎 よくないね
  }

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
