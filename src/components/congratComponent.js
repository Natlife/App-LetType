import React from 'react';

const COLORS = {
    red: 'radial-gradient(circle at 50% 50%, #ff4b1f, #ff9068)',
    blue: 'radial-gradient(circle at 50% 50%, #357ABD, #74A2E1)',
    green: 'radial-gradient(circle at 50% 50%, #2ecc71, #98f5a0)',
    purple: 'radial-gradient(circle at 50% 50%, #9b59b6, #c9a0e0)',
};

const floatUpDuration = 7000;

const styles = {
    fireworkContainer: {
        position: 'absolute',
        bottom: 0,
        width: 500,
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible',
    },
    balloonContainer: {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
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
        this.balloonContainerRef = React.createRef();
        this.leftInterval = null;
        this.rightInterval = null;
        this.balloonInterval = null;
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
        this.balloonInterval = setInterval(() => this.createBalloon(this.balloonContainerRef.current), 900);
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
            const sparksCount = 16 + Math.floor(Math.random() * 5);
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
                const distance = 200 + Math.random() * 40;
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

    createBalloon(container) {
        if (!container) return;
        const balloon = document.createElement('div');
        const colors = ['red', 'blue', 'green', 'purple'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        Object.assign(balloon.style, {
            position: 'absolute',
            bottom: '0',
            width: '30px',
            height: '40px',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            boxShadow: 'inset -5px 0 15px rgba(255,255,255,0.4), 0 2px 8px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 0 2px #f77)',
            left: Math.random() * 100 + '%',
            background: COLORS[color],
            pointerEvents: 'none',
            animation: `floatUp ${floatUpDuration}ms linear forwards`,
            transform: 'translateY(0) translateX(0)',
        });

        // Create string as child div
        const string = document.createElement('div');
        Object.assign(string.style, {
            position: 'absolute',
            bottom: '-15px',
            left: '50%',
            width: '2px',
            height: '15px',
            backgroundColor: '#900000',
            borderRadius: '1px',
            transform: 'translateX(-50%)',
        });
        balloon.appendChild(string);

        container.appendChild(balloon);

        // Animate horizontal drift manually with requestAnimationFrame
        const driftX = (Math.random() * 40 - 20); // px
        let start = null;
        const animateHorizontal = timestamp => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = progress / floatUpDuration;
            if (percent < 1) {
                balloon.style.transform = `translateY(${-600 * percent}px) translateX(${driftX * percent}px)`;
                requestAnimationFrame(animateHorizontal);
            } else {
                if (container.contains(balloon)) container.removeChild(balloon);
            }
        };
        requestAnimationFrame(animateHorizontal);
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
                        <div
                            ref={this.balloonContainerRef}
                            style={styles.balloonContainer}
                            aria-hidden="true"
                        />
                    </>



                }
            </div>
        );
    }
}

export default CongratComponent;
