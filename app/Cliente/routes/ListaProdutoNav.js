import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import ItemList from "../components/ItemList";
import data from "../assets/data/products.json";

const ListaProdutoTabNav = createMaterialTopTabNavigator(
    {
        "8326ef03-3cfb-4693-9c3b-23cdeb6d3011": {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: 'Bebidas',
            }
        },
    },
    {
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#e1e1e1',
            scrollEnabled: true,
            style: {
                backgroundColor: 'darkorange'
            },
            indicatorStyle: {
                height: 3,
                color: 'white',
            }
        }
    }
);

export default ListaProdutoTabNav;
/*
function get_categories(categories, ItemList) {

  var categories = []
  axios.get('http://25adb2af.ngrok.io/category/all')
      .then(response => {
          categories = response
          console.log(1,categories.data)
          return categories.data
      })
      .then(data => {
        console.log('oi')
        var routes = {};
            for (var index in categories) {
                route[categories[index]] = {
                    screen: ItemList,
                    navigationOptions: {
                        tabBarLabel: categories[index],
                    }
                };
            }
        return routes
      })
    
  axios.get('http://25adb2af.ngrok.io/category/all/sub/14173240-3818-4585-9387-c667be08a6b5')
    .then(response => {
      //console.log(2,response)
    })

    if (categories.length === 0){
      console.log('abriu vazio')
        routes = {
            dairy: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'dairy',
                }
            },
            fruit: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'fruit',
                }
            },
            vegetable: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'vegetable',
                }
            },
            bakery: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'bakery',
                }
            },
            vegan: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'vegan',
                }
            }, meat: {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: 'meat',
                }
            },
        }
    }else{
      console.log('abriu cheio')
        var routes = {};
        for (var index in categories) {
            route[categories[index]] = {
                screen: ItemList,
                navigationOptions: {
                    tabBarLabel: categories[index],
                }
            };
        }
    }

    //console.log(routes)
    var routes = {
      dairy: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'dairy',
          }
      },
      fruit: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'fruit',
          }
      },
      vegetable: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'vegetable',
          }
      },
      bakery: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'bakery',
          }
      },
      vegan: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'vegan',
          }
      }, meat: {
          screen: ItemList,
          navigationOptions: {
              tabBarLabel: 'meat',
          }
      },
    return routes;
}
*/
/*
function get_categories(item, itemList) {
    var categories = [... new Set(item.map((item) => item.type))];
    var route = {};
    for (var index in categories){
        route[categories[index]] = {
            screen: ItemList,
            navigationOptions: {
                tabBarLabel: categories[index],
            }
        };
    }
    return route;
}
*/