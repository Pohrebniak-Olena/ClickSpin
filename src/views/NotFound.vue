<template>
    <main>
        <div class="container">
            <div class="col col-not-found">
                <p class="h1">40<mark>4</mark></p>
                <p class="h3">
                    Be calm
                    <br/>
                    Just change your path or press the buttom below
                </p>
                <RouterLink to="/" class="btn btn-main">Go to Main</RouterLink>
            </div>
        </div>
    </main>
</template>

<style>
.col-not-found{
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
}

.col-not-found .h3{
    margin-top: 1rem;
}

.col-not-found .btn{
    margin-top: 2.5rem;
    width: fit-content;
    min-width: fit-content;

}
</style>