import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул',
          img: 'chair-1.jpg',
          desc: 'Стул в стиле лофт',
          category: 'chair',
          price: '12 500'
        },
        {
          id: 2,
          title: 'Стул',
          img: 'chair-2.jpg',
          desc: 'Стул в стиле лофт',
          category: 'chair',
          price: '15 000'
        },
        {
          id: 3,
          title: 'Стул',
          img: 'chair-3.jpg',
          desc: 'Стул в стиле лофт',
          category: 'chair',
          price: '16 500'
        },
        {
          id: 4,
          title: 'Стол',
          img: 'table-1.jpg',
          desc: 'Стол в стиле лофт',
          category: 'table',
          price: '18 500'
        },
        {
          id: 5,
          title: 'Стол',
          img: 'table-2.jpg',
          desc: 'Стол в стиле лофт',
          category: 'table',
          price: '15 000'
        },
        {
          id: 6,
          title: 'Стол',
          img: 'table-3.jpg',
          desc: 'Стол в стиле лофт',
          category: 'table',
          price: '17 500'
        },
        {
          id: 7,
          title: 'Диван',
          img: 'divan-1.jpg',
          desc: 'Диван в стиле лофт',
          category: 'sofa',
          price: '85 000'
        },
        {
          id: 8,
          title: 'Диван',
          img: 'divan-2.jpg',
          desc: 'Диван в стиле лофт',
          category: 'sofa',
          price: '100 000'
        },
        {
          id: 9,
          title: 'Диван',
          img: 'divan-3.jpg',
          desc: 'Диван в стиле лофт',
          category: 'sofa',
          price: '115 000'
        }
      ]
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
