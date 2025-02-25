
import { Maze } from '../types';





const mazes: Maze[] = [

  { name     : "Horizontal line",
    start    : [0,0],
    end      : [4,0],
    solve4   : 5,
    solve8   : 5,
    map      : [ "s   e" ] },


  { name     : "Horizontal line",
    start    : [0,0],
    end      : [0,4],
    solve4   : 5,
    solve8   : 5,
    map      : [ "s"," "," "," ","e" ] },


  { name     : "Diagonal line",
    start    : [0,0],
    end      : [4,4],
    solve4   : 9,
    solve8   : 5,
    map      : [ "s    ","     ","     ","     ","    e" ] },


  { name     : "Simple maze",
    start    : [4,2],
    end      : [1,2],
    solve4   : 10,
    solve8   : 8,
    map      : [ "###########",
                 "# #       #",
                 "#e# s ## ##",
                 "# #       #",
                 "# ## #### #",
                 "#         #",
                 "###########" ] },

  { name     : "Simple maze with tie",
    start    : [6,1],
    end      : [1,1],
    solve4   : 20,
    solve8   : 16,
    map      : [ "###########",
                 "#e#   s   #",
                 "# #   ## ##",
                 "# #       #",
                 "# ####### #",
                 "#         #",
                 "###########" ] },

  { name     : "Blocked maze",
    start    : [6,1],
    end      : [1,1],
    solve4   : null,
    solve8   : null,
    closest4 : 4,
    closest8 : 4,
    map      : [ "###########",
                 "#e#   s   #",
                 "# #   ## ##",
                 "# #       #",
                 "# ####### #",
                 "#     #   #",
                 "###########" ] },

  { name     : "Diagonal-only solution",
    start    : [6,1],
    end      : [1,1],
    solve4   : null,
    solve8   : 14,
    closest4 : 4,
    map      : [ "###########",
                 "#e#   s   #",
                 "# ###### ##",
                 "# #       #",
                 "# #####   #",
                 "#      #  #",
                 "###########" ] },

  { name     : "Larger maze",
    start    : [1,9],
    end      : [59,11],
    solve4   : 106,
    solve8   : 84,
    map      : [ "##################################################################",
                 "# #    2          #           ######## ######## # # ## #    # # ##",
                 "# #### #### # ########## ############# #        # # ## #    # # ##",
                 "#         # #          # #             ######## # # ## #    # # ##",
                 "# # ####### ### ######## #############        # # # ## #    # # ##",
                 "# #    # #    #  3            ######## ######## # #              #",
                 "# # # ## ## ### ####### # #####        ########## ########### ####",
                 "# ### #   # # # ####### # ############ #                 8  # # ##",
                 "### # # #            ## #4           # ########## # # ## # ## # ##",
                 "#s# # ################# # ############ ##       # # # ## # ## # ##",
                 "# # 1           #       # #               #######7# # ## # ## #  #",
                 "# # # ##### ## ######## # ############ ## #       # # ## #e## #  #",
                 "# # ###   # #         # #       5      ##6####### ########### #  #",
                 "# # # # #   ## ######## ##  ########## ##                        #",
                 "#   # # ###### #        #       ######### # ################# ## #",
                 "# # #        # ######## ##  #####         #                 # ## #",
                 "##################################################################" ] },

];





export { mazes };
