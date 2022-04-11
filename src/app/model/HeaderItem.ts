export interface Item {
     img: string,
     title: string,
     amount: string
}

const item1: Item = {
     img: '/assets/dashborad/item1.svg',
     title: 'Total Paitents',
     amount: '999'
}

const item2: Item = {
     img: '/assets/dashborad/item2.svg',
     title: 'New Paitents',
     amount: '19'
}

const item3: Item = {
     img: '/assets/dashborad/item3.svg',
     title: "Today's Operation",
     amount: '39'
}

const item4: Item = {
     img: '/assets/dashborad/item4.svg',
     title: 'Our Doctors',
     amount: '15'
}

export const items = [item1, item2, item3, item4]