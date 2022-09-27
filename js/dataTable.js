$(document).ready(function () {
    $('#example').DataTable({
        "language": {
            "url": 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/es-MX.json'
        },
        "ordering": false,
        "dom": 
        `     
            <"top flex flex-col justify-centerl md:flex-row md:justify-between mb-10 lg:mb-5 gap-y-4"  <"">    <"flex justify-center"f>> 
            r<"overflow-x-auto lg:overflow-x-hidden" <"snap-x"t>>      
            <"bottom mt-4--"ip><"clear">
        `,
    });
});