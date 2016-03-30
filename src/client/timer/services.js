const $ = window.$

function createBreakpoints(mode) {
  const steps = getSteps(mode)

  if (!steps) {
    return
  }

  steps.forEach((step, i) => {
    const innerHTML = `
      ${step}<br>
      <div class="step-time">00 : 00 . 00</div>
    `
    $(`.breakpoint:eq(${i})`).html(innerHTML)
  })
}

function getSteps(mode) {
  switch (mode) {
    case 'beginner': return ['Layer 1', 'Layer 2', 'Edges', 'Corners']
    case 'cfop': return ['Cross', 'F2L', 'OLL', 'PLL']
    case 'roux': return ['Block 1', 'Block 2', 'CMLL', 'L6E']
    default: break
  }
}

export {
  createBreakpoints
}
