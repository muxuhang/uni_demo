<template>
	<view class="market container">
		<Presale/>
		<MTabBar :tablist="tabList" :tabkey="currentKey" :flex="true" @tabClick="tabClick">
		</MTabBar>
	</view>
</template>
<script>
	import MTabBar from '@/components/m-tab-bar/m-tab-bar.vue'
	import Presale from './presale.vue'
	export default {
		components:{
			MTabBar,
			Presale
		},
		data() {
			return {
				tabList: [{
					label: 'Asset',
					value: 0
				},{
					label: 'Creator',
					value: 1
				},{
					label: 'Collection',
					value: 2
				}],
				currentKey: 0
			}
		},
		created() {
			
		},
		methods: {
			tabClick(e) {
				this.currentKey = e
			}
		}
	}
</script>

<style lang="scss">
	.market {}
</style>
