const DoctorCard = (props) => {
    return (
        <div className="col-sm-6 col-md-3 team-item">
            <img src={props.photo} alt="team" className="img-fluid" />
                <div className="team-des">
                    <div className="team-des-1">{props.name}</div>
                    <div className="team-des-2">{props.description}</div>
                </div>
                <span className="text-muted">{props.position}</span>
        </div>
    )
}
// Домашняя работа.
// 1) Сделать добавление через map
// 2) Сделать меню и portfolio через компоненты
// 3) Передавать свойства (props) через объект
const doctors = (
    <div className={"d-flex"}>
        <DoctorCard name={"Dr.Cox"} position={"Main doctor"} description={"Lorem ipsum dolor sit amet, consectetur."} photo={"images/cox.jpg"}/>
        <DoctorCard name={"Dr.Bob Kelso"} position={"Chief of medicine"} description={"Nothing in this world, that's worth having comes easy"} photo={"images/kelso.jpg"}/>
        <DoctorCard name={"Dr.Cox"} position={"Main doctor"} description={"Lorem ipsum dolor sit amet, consectetur."} photo={"images/cox.jpg"}/>
        <DoctorCard name={"Dr.Cox"} position={"Main doctor"} description={"Lorem ipsum dolor sit amet, consectetur."} photo={"images/cox.jpg"}/>
    </div>
);

ReactDOM.render(doctors, document.querySelector('.doctors'));