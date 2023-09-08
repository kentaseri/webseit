document.addEventListener("DOMContentLoaded", function () {
    const animationContainer = document.getElementById("animationContainer");
    const audio = document.getElementById("sound1");
    const animatedText = document.getElementById("animatedText");
    const startButton = document.getElementById("startAnimation");

    let isAnimationStarted = false;

    // アニメーションを開始する処理を定義
    function startAnimation() {
        if (!isAnimationStarted) {
            animationContainer.classList.add("animate"); // アニメーションクラスを追加
            animationContainer.classList.remove("animate-paused"); // 一時停止クラスを削除
            animatedText.classList.add("animate-lupin"); // テキストアニメーションクラスを追加
            audio.currentTime = 0; // オーディオを最初に戻す
            audio.play(); // オーディオ再生
            isAnimationStarted = true;
        }
    }

    // 画像ボタンをクリックしたときの処理
    startButton.addEventListener("click", startAnimation);

    // テキストがクリックされたときの処理
    animatedText.addEventListener("click", function () {
        if (isAnimationStarted) {
            animatedText.style.animation = "none"; // アニメーションを一時停止
            void animatedText.offsetWidth; // リフローを強制する
            animatedText.style.animation = null; // アニメーションを再開

            audio.currentTime = 0; // オーディオを最初に戻す
            audio.play(); // オーディオ再生
        }
    });
});
