$("#gform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzmcg6RqfAQwrfT88Qt0zGBMKwFXRzpCCDvlz_2a43lz3-vUQizlg-jv4X_SBmSF722gA/exec",
        data:$("#gform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
