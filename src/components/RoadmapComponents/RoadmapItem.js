import line from './images/line.png';

export default function RoadmapItem({ item, index, activeItem, onActive }) {
    const isActive = index + 1 === activeItem.id;
    const activeClass = isActive ? activeItem.status : "";

    return (
        <div
            className={`roadmap-item ${activeClass}`}
            key={index}
            onClick={() => onActive(index + 1)}
            onMouseOver={() => onActive(index + 1)}
        >
            <div className="roadmap-item-count">
                <p>{index + 1}</p>
            </div>
            <img src={line} alt="" />
            <div className="roadmap-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}
  