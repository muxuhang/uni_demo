<template>
	<view class="scroll-box">
		<view class="tab-bar" ref="tabbar" :class="flex?'tab-flex':'tab-auto'">
			<view v-for="(item,index) in tablist" :key="index" @click="handleClick(index)" class="tab-bar-item"
				:class="[index==tabkey?'is-active':'']">
				{{item.label}}
			</view>
			<view v-if="flex" class="tab-bar-line"
				:style="'transform:transLateX(-50%);left:calc('+((100*tabkey)/tablist.length+50/tablist.length)+'%);width:calc('+50/tablist.length+'%)'">
			</view>
			<view v-else-if="showLine" class="tab-bar-line" :style="'width:30rpx;margin-left:-15rpx;left:'+(
				parseFloat(this.$refs.tabbar.$children[tabkey].$el.offsetLeft)+
				parseFloat(this.$refs.tabbar.$children[tabkey].$el.clientWidth/2))+'px'"></view>
		</view>
	</view>

</template>

<script>
	const COMPONENT_NAME = 'm-tab-bar'
	export default {
		name: COMPONENT_NAME,
		props: {
			tablist: {
				type: Array,
				require: true,
				default: []
			},
			tabkey: {
				type: Number,
				require: true
			},
			tabClick: {
				type: Function,
				require: true
			},
			flex: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				showLine: false
			}
		},
		mounted() {
			this.showLine = true
		},
		methods: {
			handleClick(index) {
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-box {
		width: 100%;
		overflow-x: auto;
		background: #fff;

		.tab-bar {
			position: relative;

			.tab-bar-item {
				padding: 12rpx 24rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.tab-bar-line {
				height: 4rpx;
				background-color: skyblue;
				position: absolute;
				bottom: 0;
				transition: 0.3s;
			}

			.is-active {
				font-weight: bold;
			}
		}

		.tab-flex {
			display: flex;
			flex-direction: row;

			.tab-bar-item {
				flex: 1;
				text-align: center;
			}
		}

		.tab-auto {
			min-width: 100%;
			width: fit-content;
			white-space: nowrap;
			overflow-y: hidden;
			overflow-x: scroll;

			.tab-bar-item {
				display: inline-block;
			}
		}
	}
</style>
