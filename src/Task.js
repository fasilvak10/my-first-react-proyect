import "./task.css";

export function TaskCard({ready}) {
  const carStyles = { background: "#202020", color: "#fff", padding: "20px" };

  return (
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}> Mi Primer Tarea </h1>
      <span className={ ready  ? 'bg-green' : 'bg-red'}>{ready ? "Tarea realizada" : "Tarea pendiente"}</span>
    </div>
  );
}
