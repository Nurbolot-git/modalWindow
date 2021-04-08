$(document).ready(function () {
    showStartModal();
})
function showStartModal(){
    if (localStorage.getItem("btn-yes") != 1) {
        setTimeout(function () {
            $("#exampleModal").modal('show');
            $("#btn-yes").on("click",function (){
                localStorage.setItem("btn-yesbtn", 1);
                $("#exampleModal").modal('hide');
            });
        }, 5000);
    }
}