<script lang="ts" setup>
import UserInflowScreen from '@/views/DashBoard/UserInflowScreen.vue'

function changeTrendTarget (jointype: string) { // 가입자 추이 lineChart 버튼 클릭시 sns filter
  console.log(jointype)
}

</script>

<template>
  <UserInflowScreen
    :inflowSum="{
      base: { user: 7000, date: '2023-10-06', new_visit: 3597, return_visit: 4068, total_visit: 7665, login: 3039, join: 103, join_sns: { naver: 6, kakao: 3, google: 11, facebook: 5, apple: 4 }, withdraw: 99, dormant: 24, return: 357 },
      compare: { user: 7000, date: '2023-09-29', new_visit: 2982, return_visit: 3658, total_visit: 6640, login: 2657, join: 78, join_sns: { naver: 7, kakao: 2, google: 20, facebook: 2, apple: 4 }, withdraw: 115, dormant: 19, return: 252 }
    }"
    :inflowCalculator="{ inflowRate: { newVisit: 46, returnVisit: 53 }, joinRate: { base: 2, compare: 2 }, snsEmailSum: 74, snsRate: { email: 71, naver: 5, kakao: 2, google: 10, facebook: 4, apple: 3 } }"
    :joinVisitCountChart="{ labels: [ '2023-10-06','2023-10-07','2023-10-08','2023-10-09','2023-10-10','2023-10-11','2023-10-12' ], datasets: [ { label: '기준',borderColor: '#2c3e50',borderDash: [ 3,3 ],data: [ 26,17,17,6,17,19,1 ] },{ label: '비교',borderColor: '#009ef6',fill: true,data: [ 19,3,0,5,17,6,28 ] } ] }"
    :joinRateBarChart="{ labels: [ '2023-10-06','2023-10-07','2023-10-08','2023-10-09','2023-10-10','2023-10-11','2023-10-12' ], datasets: [ { label: '가입',backgroundColor: 'rgba(60,60,60,0.66)',data: [ 26,17,17,6,17,19,1 ] } ] }"
    :isLoading="false"
    @joinTrendTargetChange="changeTrendTarget"
  />
</template>