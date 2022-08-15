<template>
	<view class="listdemo container">
		<uni-collapse ref="collapse" accordion>
			<uni-collapse-item :open="index==0" v-for="(item,index) in list" :title="item.flowName">
				<view class="content">
					<Step :list='item.childList'></Step>
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import Step from './step.vue'
	export default {
		components: { Step },
		data() {
			return {
				list: []
			}
		},
		created() {
			this.getJsonData()
		},
		methods: {
			async getJsonData() {
				const result = await fetch('/static/json/demo.json')
				const res = await result.json()
				this.list = res.data
			}
		}
	}
</script>

<style lang="scss">
	.container {}
</style>
