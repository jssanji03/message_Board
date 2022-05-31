//## Datatable Responsive 套件 - Start ##//



$(function () {
    $('.datatable-RWD').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        scroller: true,
        responsive: true,
        "lengthChange": false,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
);

$('.select2bs4').select2({
    theme: 'bootstrap4'
})
    $(".js-table").DataTable({
        "responsive": false,
        "lengthChange": false,
        "autoWidth": false,
        searching: false,
        "ordering": false,
        "info": false,
        "language": {
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
        },
        dom: "<'row'<'col-12'tl>>" +
            "<'row'<'col-12 p-2 d-flex justify-content-center'p>>",
    })


        const pathname = window.location.pathname;
        const pathArray = pathname.split('/');
        $(".nav-sidebar li a").each(function () {
            const navController = $(this).attr("data-controller");
            if (navController && pathArray.indexOf(navController) >= 0) {
                $(this).addClass("active");
                $(this).parents('.nav-treeview').children('.nav-link').addClass("active")
                $(this).parents('.nav-treeview').parent().addClass("menu-open")
                $(this).parents('.menu-open').children('.nav-link').addClass("active")
            }
        });
  });