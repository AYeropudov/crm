import React, {Component} from 'react'
import DictElement from "./DictElement/index";
import FilterBtns from "./FilterDictBtns/index";

class Dictionary extends Component{

    constructor(props){
        super(props);
        let preconfDict = [
            {title: "Категории Контрагентов", key:"sections"},
            {title: "Подкатегории контрагентов", key:"subsections"},
            {title: "Форматы контрагентов", key:"formats"},
            {title: "Товарное направление", key:"goods_targeting"},
            {title: "Конечный покупатель", key:"buyer_target"},
            {title: "Регион/Округ", key: "region"},
            {title: "Город", key: "city"},
            {title: "Вид оплаты", key: "payment_section"},
            {title: "Форма оплаты", key: "payment_type"},
            {title: "Осчет дней отсрочки платежа", key: "payment_prolongation"},
            {title: "Формы договоров", key: "contract_type"},
            {title: "Частота заявок", key: "order_frequency"},
            {title: "Вид документооборота", key: "workflow"},
            {title: "Доставка", key: "delivery"},
            {title: "Возврат товара", key: "purchase_back"},
            {title: "Перечень документов для заключения договора", key: "paper_pack"},
        ];
        this.state = {
            dicts: preconfDict.slice(0),
            filter: preconfDict.slice(0)
        };
        preconfDict = null;
        this.filterDicts = this.filterDicts.bind(this);
        this.unFilterDicts = this.unFilterDicts.bind(this);

    }

    initFilter(){
        this.setState({filter:this.state.dicts});
    }

    filterDicts(filter){
        let currentFilter = this.state.filter;
        currentFilter.push(filter);
        console.log(currentFilter);
        this.setState({filter:currentFilter});
    }

    unFilterDicts(filter){
        let currentFilter = this.state.filter;
        let index = currentFilter.findIndex(itm => itm.key === filter.key);
        if(index!== -1){
            currentFilter.splice(index, 1);
        }
        console.log(currentFilter);
        this.setState({filter:currentFilter});
    }

    render(){

        return(
            <div className="row">
                <FilterBtns filter={this.filterDicts} unFilter={this.unFilterDicts} btns={this.state.dicts} />
                {this.state.filter.map((dict)=><DictElement title={dict.title} dict-type={dict.key} key={dict.key}/>)}
            </div>
        );

    }
}
export default Dictionary;