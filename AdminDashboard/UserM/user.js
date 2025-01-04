let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function opensidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closesidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
  

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab, .content').forEach((el) => {
      el.classList.remove('active');
    });
    tab.classList.add('active');
    document.getElementById(tab.id.replace('-tab', '-management')).classList.add('active');
  });
});