  function updateWaktuNavbar() {
    const sekarang = new Date();

    const opsiTanggal = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    document.getElementById('tanggalNavbar').innerHTML =
      sekarang.toLocaleDateString('id-ID', opsiTanggal);

    document.getElementById('jamNavbar').innerHTML =
      sekarang.toLocaleTimeString('id-ID') + ' WIT';
  }

  updateWaktuNavbar();
  setInterval(updateWaktuNavbar, 1000);

document.querySelectorAll('.submenu-toggle').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    let parent = this.parentElement;

    // tutup submenu lain di level yang sama
    parent.parentElement.querySelectorAll('.dropdown-submenu').forEach(sub => {
      if (sub !== parent) {
        sub.classList.remove('show');
      }
    });

    parent.classList.toggle('show');
  });
});

