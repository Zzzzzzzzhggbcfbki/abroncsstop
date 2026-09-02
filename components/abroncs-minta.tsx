/*
  Halvány futófelület-rajz a háttérben. Maszkként használjuk, a színt a
  --tinta token adja, így világos és sötét módban is magától helyes.
  Díszítés, ezért aria-hidden és nem fog el kattintást.
*/
export function AbroncsMinta({
  className = "",
  vilagos = false,
}: {
  className?: string;
  vilagos?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={`abroncsminta ${vilagos ? "abroncsminta-vilagos" : ""} ${className}`}
    />
  );
}
