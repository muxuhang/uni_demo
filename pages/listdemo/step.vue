<template>
	<view id="step">
		<view v-for="(item,index) in list" :key="index" class="list_item">
			<view class="item">
				<view class="item_icon">{{item.number}}</view>
				<view v-if="item.start" class="item_ring"></view>
				<view class="item_title">{{item.flowName}}</view>
			</view>
			<view class="list_row">
				<view class="row_item item" v-for="(row,key) in item.childList">
					<view class="item_icon">{{row.number}}</view>
					<view v-if="row.start" class="item_ring"></view>
					<view class="item_title">{{row.cnName}}</view>
					<view class="item_dashed_line"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(e) {
			console.log(e.$attrs.list)
			return {
				list: e.$attrs.list,
			}
		},
		created() {

		}
	}
</script>

<style lang="scss">
	#step {
		.list_item {
			padding: 40rpx 0;
			padding-left: 40rpx;
			border-left: 10rpx solid skyblue;
			margin: 0 20rpx;
			.item {
				font-size: 26rpx;
				padding: 10rpx 0;
				position: relative;
				color: #fff;
				.item_icon {
					text-align: center;
					color: #fff;
					font-size: 20rpx;
					line-height: 26rpx;
					height: 26rpx;
					width: 26rpx;
					border-radius: 100%;
					background-color: skyblue;
					position: absolute;
					left: -57rpx;
					top: 27rpx;
					z-index: 1;
				}
				.item_ring {
					height: 32rpx;
					width: 32rpx;
					border-radius: 100%;
					position: absolute;
					left: -63.75rpx;
					top:19.22rpx;
					border: 5rpx solid rgba(0,0,0,0.3);
					z-index: 1;
				}
				.item_title{
					height: 40rpx;
					line-height: 40rpx;
					margin-top: 10rpx;
					background-color: skyblue;
					width: fit-content;
					padding: 0 20rpx;
				}
			}
			.list_row {
				.row_item {
					margin-left: 60rpx;
					.item_dashed_line{
						position: absolute;
						border-right: 4px dashed skyblue;
						height: 100%;
						width: 50rpx;
						left: -100rpx;
						top: 0;
						z-index: 0;
					}
				}
				:nth-child(1) .item_dashed_line{
						border-top: 4px dashed skyblue;
						border-top-right-radius: 20rpx;
				}
				:last-child .item_dashed_line{
						border-bottom: 4px dashed skyblue;
						border-bottom-right-radius: 20rpx;
				}
			}
		}
	}
</style>
