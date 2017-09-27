import React, {PureComponent} from 'react'

class Dictionary extends PureComponent{

    constructor(props){
        super(props);
        let preconfDict = [
            {label: "Категории Контрагентов", data:"sections", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Подкатегории контрагентов", data:"subsections", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Форматы контрагентов", data:"formats", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Товарное направление", data:"goods_targeting", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Конечный покупатель", data:"buyer_target", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Регион/Округ", data: "region", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Город", data: "city", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Вид оплаты", data: "payment_section", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Форма оплаты", data: "payment_type", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Осчет дней отсрочки платежа", data: "payment_prolongation", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Формы договоров", data: "contract_type", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Частота заявок", data: "order_frequency", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Вид документооборота", data: "workflow", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Доставка", data: "delivery", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Возврат товара", data: "purchase_back", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
            {label: "Перечень документов для заключения договора", data: "paper_pack", "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": []},
        ];
        this.state = {
            data: [{label: "Справочники", data:"references", expanded:true, "expandedIcon": "fa-folder-open", "collapsedIcon": "fa-folder","children": preconfDict}],
            reference: []
        };
    }



    render(){


        return(
            <div className="row">

            </div>
        );

    }
}
export default Dictionary;