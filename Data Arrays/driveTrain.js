driveTrain = [
    { type: "Front-Wheel Drive",
      power: -10,
      cost: 20000,
      weight: 1000,
      consumption: 10,
      torque: 10
      },
    { type: "Rear-Wheel Drive",
      power: -5,
      cost: 20000,
      weight: 1000,
      consumption: 10,
      torque: 15
    },
    { type: "All-Wheel Drive",
      power: 0,
      cost: 40000,
      weight: 2000,
      consumption: 20,
      torque: 25
    },
    { type: "FluxDrive Matrix",
      power: 1250,
      cost: 35000,
      weight: 2700,
      consumption: 5,
      torque: 55
    },
    { type: "Electric Rear-Wheel Drive",
      power: 20,
      cost: 25000,
      weight: 1500,
      consumption: 2,
      torque: 40
    },
    { type: "Electric All-Wheel Drive",
      power: 50,
      cost: 45000,
      weight: 1600,
      consumption: 0,
      torque: 70
    },
    { type: "Hybrid Front-Wheel Drive",
      power: 5,
      cost: 30000,
      weight: 1400,
      consumption: 15,
      torque: 20
    },
    { type: "Hybrid All-Wheel Drive",
      power: 10,
      cost: 50000,
      weight: 1800,
      consumption: 12,
      torque: 50
    },
    { type: "Performance Electric Drive",
      power: 100,
      cost: 55000,
      weight: 2000,
      consumption: 1,
      torque: 100
    },
    { type: "Quantum Pulse Drive",
      power: 1500,
      cost: 70000,
      weight: 2200,
      consumption: 3,
      torque: 120
    },
    { type: "Magnetic Levitation Drive",
      power: 500,
      cost: 80000,
      weight: 1200,
      consumption: 0,
      torque: 80
    }
]

module.exports = driveTrain;