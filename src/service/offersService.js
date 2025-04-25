const mockOffers = [
    {
        title: "Desarrollador Inteligencia Artificial",
        zone: "Bogotá, D.C., Bogotá D.C.",
        mode: "Remoto y presencial",
        moreInfo: {
            price: 2000000,
            InfoAditional: "Contrato Indefinido",
            Time: "Tiempo Completo",
            WorkFrom: "Remoto",
            titleDescription: "Requisitos para el trabajo",
            Description:`2-5 años de experiencia en desarrollo de software, con enfoque en aplicaciones Python y AI. Al menos 6 meses de experiencia trabajando con modelos de IA generativa y LLM.

• Conocimientos en Python. Deseable conocimiento en C# y .NET.

• Experiencia demostrable en el diseño y optimización de indicaciones para LLM, con una sólida comprensión de cómo guiar el comportamiento de los modelos.

• Experiencia en automatización de pruebas para sistemas a gran escala y análisis de rendimiento de modelos de IA exponiéndolos a diversos conjuntos de datos y lenguajes.

• Familiaridad con herramientas y plataformas de CI/CD como GitHub, Azure DevOps y tecnologías relacionadas para automatizar los procesos de desarrollo e implementación.

• Comprender cómo crear y consumir API RESTful, incluido el manejo de rutas, métodos HTTP (GET, POST, PUT, DELETE), código de estado, autenticación, etc.

Diseñar, implementar y optimizar algoritmos y estructuras de datos eficientes para el manejo de grandes volúmenes de datos.

• Utilizar la experiencia en Python e Inteligencia Artificial (IA) para desarrollar herramientas que aprovechen los modelos de lenguaje a gran escala (LLM).

• Desarrollar estrategias de pruebas automatizadas para evaluar el desempeño del sistema con grandes volúmenes de datos, identificando debilidades en el manejo de diferentes lenguajes y sugiriendo mejoras para aumentar la precisión y eficiencia de la aplicación.

• Crear, probar y optimizar indicaciones para mejorar el rendimiento de los LLM. Utilice su conocimiento de la IA generativa para ajustar los modelos y obtener mejores resultados y análisis.`,

        }
    }
]

export const GetAllOffers = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ({data:mockOffers});
        }, 500)
    })
}