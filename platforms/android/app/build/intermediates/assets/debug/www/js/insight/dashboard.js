$(document).on('page:init', '.page[data-name="dashboard"]', function (e) {
	var htmlslider = `<div class="swiper-slide"><div class="card shadow-sm bg-danger text-white w-100"><div class="card-body"><img src="./img/icon/kategori-4.png" alt="" class="img-card-dashboard"><h6 class="mt-2">SIMAK UI 2021</h6><p class="text-muted small mt-0">12 task</p></div></div></div><div class="swiper-slide"><div class="card shadow-sm bg-success text-white w-100"><div class="card-body"><img src="./img/icon/kategori-1.png" alt="" class="img-card-dashboard"><h6 class="mt-2">SIMAK UI 2021</h6><p class="text-muted small mt-0">12 task</p></div></div></div><div class="swiper-slide"><div class="card shadow-sm bg-primary text-white w-100"><div class="card-body"><img src="./img/icon/kategori-2.png" alt="" class="img-card-dashboard"><h6 class="mt-2">SIMAK UI 2021</h6><p class="text-muted small mt-0">12 task</p></div></div></div><div class="swiper-slide"><div class="card shadow-sm bg-warning text-white w-100"><div class="card-body"><img src="./img/icon/kategori-3.png" alt="" class="img-card-dashboard"><h6 class="mt-2">SIMAK UI 2021</h6><p class="text-muted small mt-0">12 task</p></div></div></div>`
    var swiper = app.swiper.create('.swiper-container', {
        speed: 1000,
        slidesPerView: 2,
        loop: true,
        loopedSlides: 4,
        observer: true
    });
    swiper.appendSlide(htmlslider);
    swiper.autoplay.start();

    var today = new Date();
    $("input[type='date']").val(today.toISOString().substr(0, 10));
	window.randomScalingFactor = function () {
        return Math.round(Math.random() * 50);
    }
	var areachart = document.getElementById('areachart').getContext('2d');
	var gradient = areachart.createLinearGradient(0, 0, 0, 400);
	gradient.addColorStop(0, '#FFC374');
	gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
	var myareachartCofig = {
		type: 'line',
		data: {
			labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
			datasets: [{
				label: '# of Votes',
				data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				],
				backgroundColor: gradient,
				borderColor: '#FFC374',
				borderWidth: 1,
				fill: true,
				tension: 0.4,
			}]
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					display: false,
					beginAtZero: true
				},
				x: {
					fontColor: '#999999',
				}
			}
		}
	}
	var myAreaChart = new Chart(areachart, myareachartCofig);

	var barchart = document.getElementById('barchart').getContext('2d');
	var mybarchartCofig = {
		type: 'bar',
		data: {
			labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
			datasets: [{
				label: '# of Votes',
				data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				],
				backgroundColor: "#E3EAFE",
				fill: true,
				tension: 0.4,
			},
			{
				label: '# of Votes',
				data: [
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				randomScalingFactor(),
				],
				backgroundColor: "#7297F8",
				fill: true,
				tension: 0.4,
			}]
		},
		options: {
			plugins: {
				legend: {
					display: false,
				},
			},
			scales: {
				y: {
					display: false,
					beginAtZero: true
				},
				x: {

				},
			}
		}
	}
	var myBarChart = new Chart(barchart, mybarchartCofig);

	/* swiper carousel highlights */
    var swiper1 = new Swiper(".swiperhighlight", {
        slidesPerView: "auto",
        spaceBetween: 10,
        pagination: false
    });

    /* Progress circle  */
    var progressCircles = new ProgressBar.Circle(progressCircle1, {
        color: '#7297F8',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(0, 0, 0, 0.08)',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#7297F8', width: 10 },
        to: { color: '#7297F8', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    progressCircles.text.style.fontSize = '20px';
    progressCircles.animate(0.8);  // Number from 0.0 to 1.0

    var progressCirclesred = new ProgressBar.Circle(progressCircle2, {
        color: '#FB737C',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(0, 0, 0, 0.08)',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FB737C', width: 10 },
        to: { color: '#FB737C', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    progressCirclesred.text.style.fontSize = '20px';
    progressCirclesred.animate(0.2);  // Number from 0.0 to 1.0
});