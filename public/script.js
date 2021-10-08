particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 180,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#82ff9e"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#82ff9e"
            },
            "polygon": {
                "nb_sides": 11
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7023414010527227,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 0,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 157.82952832645452,
            "color": "#82ff9e",
            "opacity": 1,
            "width": 1.5
        },
        "move": {
            "enable": true,
            "speed": 0.6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 215,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 146.17389821424212,
                "size": 20,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 30,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
