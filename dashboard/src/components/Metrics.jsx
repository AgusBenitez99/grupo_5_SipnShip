import { MetricItem } from './MetricItem';

const data = [
    {
      id: crypto.randomUUID(),
      color: "primary",
      title: "Productos en almacen",
      value: 21,
      icon: "fas fa-wine-bottle",
    },
    {
      id: crypto.randomUUID(),
      color: "success",
      title: "Usuarios registrados",
      value: 8,
      icon: "fa-user",
    },
    {
      id: crypto.randomUUID(),
      color: "warning",
      title: "Ventas Realizadas",
      value: 36,
      icon: "fas fa-shopping-cart",
    },
  ];

export const Metrics = () => {
    return (
      <div className="col-12">
        <div className="row">
          {data.map(({ color, title, value, icon, id }) => (
            <MetricItem
              key={id}
              color={color}
              title={title}
              value={value}
              icon={icon}
            />
          ))}
        </div>
      </div>
    )
  }
  