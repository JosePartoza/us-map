const paths = document.querySelectorAll("svg path[id]");

paths.forEach((path) => {
  const stateName = path.getAttribute("id");
  const textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );

  // Get the bounding box of the path
  const bbox = path.getBBox();

  // Calculate the centroid of the path
  const centroidX = bbox.x + bbox.width / 2;
  const centroidY = bbox.y + bbox.height / 2;

  textElement.textContent = stateName;
  textElement.setAttribute("x", centroidX);
  textElement.setAttribute("y", centroidY);
  textElement.setAttribute("text-anchor", "middle");
  textElement.setAttribute("alignment-baseline", "middle");
  path.parentNode.appendChild(textElement);
});
