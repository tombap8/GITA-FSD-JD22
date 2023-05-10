// 상품 리스트 배열
const database = [
    { id: 1, name: '상품A', price: 1000, content: '상품A 상세' },
    { id: 2, name: '상품B', price: 2000, content: '상품B 상세' },
    { id: 3, name: '상품C', price: 3000, content: '상품C 상세' }
  ]
  // 임포트 대상에서 사용할 수 있는 함수를 객체로 정의하기
  export default {
    fetch(id) {
      return database
    },
    find(id) {
      return database.find(el => el.id === id)
    },
    asyncFind(id, callback) {
      setTimeout(() => {
        callback(database.find(el => el.id === id))
      }, 1000)
    }
  }

  