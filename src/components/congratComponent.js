import React from 'react';




const styles = {
  fireworkContainer: {
    position: 'absolute',
    bottom: 0,
    width: 500,
    height: '100%',
    pointerEvents: 'none',
    overflow: 'visible',
  },
};

class CongratComponent extends React.Component {
  constructor(props) {
    super(props);
    this.leftContainerRef = React.createRef();
    this.rightContainerRef = React.createRef();
    this.leftInterval = null;
    this.rightInterval = null;
  }

  componentDidMount() {
    // Inject keyframes CSS once
    this.styleTag = document.createElement('style');
    this.styleTag.textContent = `
      @keyframes shootUp {
        0% {
          transform: translateY(0) scale(1);
          opacity: 1;
          filter: drop-shadow(0 0 3px #ffc700);
        }
        70% {
          opacity: 1;
          filter: drop-shadow(0 0 8px #ffb700);
        }
        100% {
          transform: translateY(-250px) scale(0.7);
          opacity: 0;
          filter: drop-shadow(0 0 0 #ffc700);
        }
      }
      @keyframes sparkFly {
        0% {
          transform: translate(0, 0);
          opacity: 0.8;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 1;
        }
        100% {
          transform: translateY(-600px) translateX(20px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(this.styleTag);

    this.leftInterval = setInterval(() => this.createFirework(this.leftContainerRef.current), 1200);
    this.rightInterval = setInterval(() => this.createFirework(this.rightContainerRef.current), 1500);
  }

  componentWillUnmount() {
    document.head.removeChild(this.styleTag);
    clearInterval(this.leftInterval);
    clearInterval(this.rightInterval);
    clearInterval(this.balloonInterval);
  }

  createFirework(container) {
    if (!container) return;
    const firework = document.createElement('div');
    Object.assign(firework.style, {
      position: 'absolute',
      bottom: '0',
      width: '20px',
      height: '80px',
      borderRadius: '100%',
      background: '#fff',
      boxShadow: '0 0 10px #ff8c00, 0 0 15px orange',
      left: Math.random() * container.clientWidth + 'px',
      animation: 'shootUp 1000ms ease forwards',
      pointerEvents: 'none',
    });

    container.appendChild(firework);

    firework.addEventListener('animationend', () => {
      container.removeChild(firework);
      const sparksCount = 8 + Math.floor(Math.random() * 5);
      for (let i = 0; i < sparksCount; i++) {
        const spark = document.createElement('div');
        Object.assign(spark.style, {
          position: 'absolute',
          width: '10px',
          height: '10px',
          background: '#ffcd4e',
          borderRadius: '50%',
          opacity: 0,
          filter: 'drop-shadow(0 0 2px #ffcd4e)',
          left: firework.style.left,
          bottom: '250px',
          animation: 'sparkFly 2000ms ease forwards',
          pointerEvents: 'none',
          transform: 'translate(0,0)',
        });
        // Calculate explosion offset
        const sparksAngleOffset = (360 / sparksCount) * i + (Math.random() * 20 - 10);
        const distance = 100 + Math.random() * 40;
        const rad = (sparksAngleOffset * Math.PI) / 180;
        const x = Math.cos(rad) * distance;
        const y = Math.sin(rad) * distance;
        spark.style.transform = `translate(${x}px, ${y}px)`;
        container.appendChild(spark);
        spark.addEventListener('animationend', () => {
          container.removeChild(spark);
        });
      }
    });
  }



  render() {
    return (
      <div style={{ zIndex: 9999 }}>
        {this.props.checkDoneTyping &&
          <>
            <div
              ref={this.leftContainerRef}
              style={{ ...styles.fireworkContainer, left: 10, position: 'absolute' }}
              aria-hidden="true"
            />
            <div
              ref={this.rightContainerRef}
              style={{ ...styles.fireworkContainer, right: 10, position: 'absolute' }}
              aria-hidden="true"
            />

          </>



        }
      </div>
    );
  }
}

export default CongratComponent;
