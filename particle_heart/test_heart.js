let maxY = -Infinity;
let minY = Infinity;
for (let i = 0; i < 1000; i++) {
    const t = (i / 1000) * Math.PI * 2;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    if (y > maxY) maxY = y;
    if (y < minY) minY = y;
}
console.log("Max Y:", maxY);
console.log("Min Y:", minY);
console.log("Center Y:", (maxY + minY) / 2);
