$allowed = @(
    "logo_solubloc.png",
    "solubloc_hero_premium_v2_1775125433051.png",
    "solubloc.png",
    "gabiao.png",
    "forma1.jpg",
    "forma2.jpg",
    "engenharia.png",
    "prefeirutadeportoalegre1.jpg",
    "prefeirutadeportoalegre2.jpg",
    "prefeirutadeportoalegre3.jpg",
    "cabeceiradeponte.png",
    "contecao_maritima_rios.png",
    "encostas.png",
    "favicon.svg",
    "icons.svg"
)

Get-ChildItem -Path "web_presentation\public\*.*" -Include *.png, *.jpg, *.svg | ForEach-Object {
    if ($allowed -notcontains $_.Name) {
        Remove-Item $_.FullName -Force
        Write-Host "Removed: $($_.Name)"
    } else {
        Write-Host "Kept: $($_.Name)"
    }
}
