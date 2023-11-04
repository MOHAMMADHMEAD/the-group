import Card from "../card/card";
import "./rightSideNav.scss"
function RightSideNav() {

    const tableData=[
        {
            "id": 1,
            "name": "Product A",
            "price": 4
        },
        {
            "id": 2,
            "name": "Product B",
            "price": 4.4
        },
        {
            "id": 3,
            "name": "Product C",
            "price": 5.99
        },
        {
            "id": 4,
            "name": "Product D",
            "price": 3.99
        },
        {
            "id": 5,
            "name": "Product E",
            "price": 2.99
        },
        {
            "id": 6,
            "name": "Product F",
            "price": 2.99
        },
        {
            "id": 7,
            "name": "Product G",
            "price": 5.99
        },
        {
            "id": 8,
            "name": "Product H",
            "price": 8.49
        },
        {
            "id": 9,
            "name": "Product I",
            "price": 7.79
        },
        {
            "id": 10,
            "name": "Product J",
            "price": 4.99
        },
        {
            "id": 11,
            "name": "Product K",
            "price": 1.29
        },
        {
            "id": 12,
            "name": "Product L",
            "price": 5.99
        },
        {
            "id": 13,
            "name": "Product M",
            "price": 5
        },
        {
            "id": 14,
            "name": "Product N",
            "price": 5
        },
        {
            "id": 15,
            "name": "Product O",
            "price": 3.5
        },
        {
            "id": 16,
            "name": "Product P",
            "price": 3.99
        },
        {
            "id": 17,
            "name": "Product Q",
            "price": 6.49
        },
        {
            "id": 18,
            "name": "Product R",
            "price": 4.99
        },
        {
            "id": 19,
            "name": "Product S",
            "price": 3.99
        },
        {
            "id": 20,
            "name": "Product T",
            "price": 1.99
        }
    ]


    return (
       <Card padding={'0px'}>
           <div className="border-bottom" id="pills-tab" role="tablist">
               <div className="d-flex pt-3 px-3 flex-row justify-content-start gap-5">
                   <div className="tab active fw-bold text-center pb-2" role="presentation">
                       <i className="fa fa-sort"></i> السوق حسب الاسعار
                   </div>
                   <div className="tab pb-2 fw-bold" role="presentation">
                       <i className="fa fa-filter"></i> الصفقات
                   </div>
               </div>
           </div>
           <div className="tab-content" id="pills-tabContent">
               <div className="tab-pane  fade show active" id="pills-home" role="tabpanel">
         <div className="list p-2">
             <table className="table table-striped table-responsive">
                 <thead>
                 <tr>
                     <th >#</th>
                     <th className="text-center">الاسهم</th>
                     <th className="text-center">السعر</th>
                 </tr>
                 </thead>
                 <tbody>
                 {tableData.map((item,index)=>{
                     return <tr key={index} className={item.price<5?'price-down':item.price>5?'price-up':'price-equal'}>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.price}</td>
                     </tr>
                 })}
                 </tbody>
             </table>
         </div>
               </div>
           </div>
       </Card>
    )
}

export default RightSideNav;