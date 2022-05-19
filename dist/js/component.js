//## Datatable Responsive 套件 - Start ##//
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