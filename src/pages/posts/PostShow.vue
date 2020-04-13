<template>
  <q-page class=" row justify-center">
    <div class="row justify-center" style="background:black; width:800px;">
      <div class="">

        <div id="q-app">
            <div class="q-pa-sm">
              <q-card class="my-card shadow-2" bordered>
                <q-card-section horizontal>
                  <q-card-section class="q-pt-md">
                    <div class="text-overline">Overline</div>
                    <div class="text-h6 q-mt-sm q-mb-xs">My First Post</div>
                    <div class="text-caption text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                  </q-card-section>

                  <q-card-section class="col-5 flex flex-center">
                    <q-img
                      class="rounded-borders"
                      src="https://images.pexels.com/photos/698808/pexels-photo-698808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    ></q-img>
                  </q-card-section>
                </q-card-section>

                <q-separator ></q-separator>

                <q-card-actions>
                  <q-btn push color="dark">
                    Details
                  </q-btn>
                </q-card-actions>
              </q-card>

            </div>
          </div>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
