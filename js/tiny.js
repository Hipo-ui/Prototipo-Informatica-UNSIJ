tinymce.init({
    selector: '#descripcion',
    language: 'es',
    menubar: 'file edit insert view format table',
    menu: {
        file: { title: 'File', items: 'print' },
        edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
        view: { title: 'View', items: 'code | preview ' },
        insert: { title: 'Insert', items: 'image link media inserttable | charmap emoticons hr | insertdatetime' },
        format: { title: 'Format', items: 'bold italic underline | fontsize lineheight | forecolor backcolor | language | removeformat' },
        table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' }
    },
    plugins: [
        'advlist', 'autolink', 'emoticons', 'code', 'wordcount',
        'lists', 'link', 'image', 'charmap', 'preview', 'searchreplace',
        'insertdatetime', 'media', 'table',
    ],
    toolbar: 'bold italic forecolor removeformat | ' +
        'alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent '
});